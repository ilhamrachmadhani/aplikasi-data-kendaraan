//url local
const API_URL  = "http://localhost:8081/api/kendaraan";
let isEditMode = false;

$(document).ready(function() {
    loadGrid();
});

//ambil data backend
function loadGrid() {
    let nReg = $('#searchNoReg').val() || '';
    let nNama = $('#searchNamaPemilik').val() || '';


    $.ajax({
        url: API_URL + '/list?noReg=' + nReg + '&nama=' + nNama,
        type: 'GET',
        success: function(res) {
            let tbody = $('#tableBody');
            tbody.empty();
            
            if(res.length ===0 ) {
                tbody.append('<tr><td colspan="9" class="text-center">Data tidak ditemukan</td></tr>');
                return;
            }

            //loop data
            for (let i = 0; i < res.length; i++) {
                let d = res[i];
                let kapasitasStr = d.kapasitasSilinder ? d.kapasitasSilinder + 'cc' : '-'

                let tr = `<tr>
                    <td class="text-center">${i + 1}</td>
                    <td>${d.noRegistrasi}</td>
                    <td>${d.namaPemilik}</td>
                    <td>${d.merkKendaraan || '-'}</td>
                    <td class="text-center">${d.tahunPembuatan || '-'}</td>
                    <td class="text-center">${kapasitasStr}</td>
                    <td>${d.warnaKendaraan || '-'}</td>
                    <td>${d.bahanBakar || '-'}</td>
                    <td class="text-center">
                        <a class="text-warning text-decoration-none me-2 action-link" onclick="bukaForm('${d.noRegistrasi}', 'detail')">Detail</a>
                        <a class="text-primary text-decoration-none me-2 action-link" onclick="bukaForm('${d.noRegistrasi}', 'edit')">Edit</a>
                        <a class="text-danger text-decoration-none action-link" onclick="showModalDelete('${d.noRegistrasi}')">Delete</a>
                    </td>
                </tr>`;
                tbody.append(tr);
            }
        },
        error: function(err) {
            alert("Gagal load data dari server. Pastikan Backend Sudah Berjalan.")
            console.log(err);
        }
    })
}

function showFormAdd() {
    isEditeMode = false;
    $('#halamanMonitoring').hide();
    $('#halamanForm').show();

    $('#formTitle').text("Tambahkan data Kendaraan")
    $('#btnSimpan').text("Simpan").show()
    $('#inputNoReg').prop('readonly', false)

    $('#formKendaraan')[0].reset();
    enableSemuaInput(true)
}

function kembaliMonitoring() {
    $('#halamanForm').hide();
    $('#halamanMonitoring').show();
    loadGrid();
}

function bukaForm(id, mode) {
    $.ajax({
        url : API_URL + '/detail/' + id,
        type: 'GET',
        success: function(data) {
            $('#halamanMonitoring').hide();
            $('#halamanForm').show();
            
            // form data
            $('#inputNoReg').val(data.noRegistrasi);
            $('#inputNama').val(data.namaPemilik);
            $('#inputTahun').val(data.tahunPembuatan);
            $('#inputKapasitas').val(data.kapasitasSilinder);
            $('#inputMerk').val(data.merkKendaraan);
            $('#inputWarna').val(data.warnaKendaraan);
            $('#inputAlamat').val(data.alamat);
            $('#inputBBM').val(data.bahanBakar);

            if(mode === 'edit') {
                isEditMode = true;
                $('#formTitle').text("Edit Data Kendaraan");
                $('#btnSimpan').text("Ubah").show();
                $('#inputNoReg').prop('readonly', true); // PK jangan diedit
                enableSemuaInput(true);
            } else if(mode === 'detail') {
                $('#formTitle').text("Detail Data Kendaraan");
                $('#btnSimpan').hide();
                enableSemuaInput(false);
            }
        },
        error: function(err) {
            alert("Gagal ambil detail data");
        }
    });
}

function enableSemuaInput(status) {
    $('#inputNama, #inputTahun, #inputKapasitas, #inputMerk, #inputWarna, #inputAlamat, #inputBBM').prop('readonly', !status).prop('disabled', !status);
}

function simpanData() {
    let reg = $('#inputNoReg').val();
    let nama = $('#inputNama').val();
    
    // Validasi basic UI
    if(!reg || !nama) {
        alert("No Registrasi dan Nama Pemilik wajib diisi!");
        return;
    }
    let payload = {
        noRegistrasi: reg,
        namaPemilik: nama,
        tahunPembuatan: $('#inputTahun').val(),
        kapasitasSilinder: $('#inputKapasitas').val(),
        merkKendaraan: $('#inputMerk').val(),
        warnaKendaraan: $('#inputWarna').val(),
        alamat: $('#inputAlamat').val(),
        bahanBakar: $('#inputBBM').val()
    };

    $.ajax({
        url: API_URL + '/save',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(payload),
        success: function(res) {
            alert("Data berhasil disimpan");
            kembaliMonitoring();
        },
        error: function(err) {
            alert(err.responseText || "Gagal simpan data");
        }
    });
}

function showModalDelete(id) {
    $('#deleteId').val(id);
    $('#deleteTextMsg').text('Anda yakin menghapus data ' + id + ' ?');
    
    // function memanggil bootstrap
    let hapusModal = new bootstrap.Modal(document.getElementById('modalDelete'));
    hapusModal.show();
}

function eksekusiDelete() {
    let id = $('#deleteId').val();
    $.ajax({
        url: API_URL + '/delete/' + id,
        type: 'DELETE',
        success: function(res) {
            
            $('#modalDelete').modal('hide');
            $('.modal-backdrop').remove(); 
            
            // Reload grid 
            loadGrid();
        },
        error: function(err) {
            alert("Gagal hapus data");
        }
    });
}
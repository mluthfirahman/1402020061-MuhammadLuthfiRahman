$(document).ready(function() {

    $("#nomor").change(function() {
        if ($("#nomor").val() > 1) {
            $("#pulsa-1").prop("disabled", false);
            $("#paket-1").prop("disabled", false);
        } else {
            $("#pulsa-1").prop("disabled", true);
            $("#paket-1").prop("disabled", true);
        }
    });

    $("#nomor").keypress(function(value) {
        if (value.which != 8 && value.which != 0 && (value.which < 48 || value.which > 57)) {
            return false;
        }
    });

    $("#pulsa-1").change(function() {
        $("#button").prop("disabled", false);
        $("#button").css('background-color', '#fa591d');
        $("#button").css('color', 'white');
    });

    $("#paket-1").change(function() {
        $("#buttonHid").prop("disabled", false);
        $("#buttonHid").css('background-color', '#fa591d');
        $("#buttonHid").css('color', 'white');
    });

    $("#kat-pulsa").click(function() {
        $("#paket-1").prop("hidden", true);
        $("#pulsa-1").prop("hidden", false);
        $("#button").prop("hidden", false);
        $("#buttoHid").prop("hidden", true);
    })

    $("#kat-paket-data").click(function() {
        $("#pulsa-1").prop("hidden", true);
        $("#paket-1").prop("hidden", false);
        $("#button").prop("hidden", true);
        $("#buttonHid").prop("hidden", false);
    })

    $("#button").click(function() {
        {
            var nilai = $("#pulsa-1").val();
            var ubah = parseInt(nilai);
            if (ubah < 10000) {
                ubah += 3000;
            } else {
                ubah += 2000;
            }
            const confirmation = confirm("Apakah anda yakin membeli pulsa sebesar " + value + "?");
            if (confirmation) {
                alert("Selamat anda telah membeli pulsa sebesar Rp. " + convert);
            } else {

            }
        }
    });

    $("#button2Hid").click(function() {
        {
            var nilai = $("#paket-1").val();
            var ubah = parseInt(nilai);
            const confirmation = confirm("Apakah anda yakin membeli paket sebesar " + nilai + "?");
            if (confirmation) {
                alert("Selamat anda telah membeli paket sebesar Rp. " + ubah);
            } else {

            }
        }
    });

});

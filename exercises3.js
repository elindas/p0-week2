var nama = "mikael";
var peran = "Ksatria";

if (nama === "" && peran === "") {
  console.log("nama harus diisi");
} else if (nama !== "") {
  console.log("Selamat datang di Dunia Proxytia, " + nama);
  if (peran === "Tabib") {
    console.log(
      "Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka."
    );
  } else if (peran === "Penyihir") {
    console.log(
      "Halo Penyihir " +
        nama +
        ", ciptakan keajaiban yang membantu kemenanganmu!"
    );
  } else if (peran === "Ksatria") {
    console.log(
      "Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!"
    );
  }
} else {
  console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
}

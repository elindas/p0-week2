var nama = '';
var peran = 'Ksatria';


if(peran === '' && nama === '') {
    console.log('nama harus diisi');
  } else if( peran === 'Tabib') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
  } else if(peran === 'Penyihir') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama );
    console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
  } else if( peran === 'Ksatria') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama );
    console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
  } else {
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
  }


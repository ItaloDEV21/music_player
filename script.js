    let musicas = [
        {titulo:'A Brand New start', artista: 'TrackTribe', src:'music/A Brand New Start - TrackTribe.mp3', img:'img/Jazz_one.jpg'},
        {titulo: 'Bluebird', artista: 'Jammy Jams', src: 'music/Bluebird - Jammy Jams.mp3', img: 'img/Jazz_two.jpg'}, 
        {titulo: 'Ella Vater', artista: 'The Mini Vandals', src: 'music/Ella Vater - The Mini Vandals.mp3', img: 'img/Jazz_three.jpg'} 
    ];
    
    
    let musica = document.querySelector('audio');
    let indexMusica = 0;

    let durationMusic = document.querySelector('.end');

    let imagem = document.querySelector('img');
    let nomeMusica =  document.querySelector('.description h2');
    let nomeArtista = document.querySelector('.description i');

    renderizarMusica(indexMusica);

    // Events 
    document.querySelector('.btn-play').addEventListener('click', tocarMusica);

    document.querySelector('.btn-pause').addEventListener('click', pausarMusica);

    musica.addEventListener('timeupdate', atualizarBarra);

    musica.addEventListener('loadeddata', duration);


    document.querySelector('.anterior').addEventListener('click', () => {
        indexMusica --;
        if (indexMusica < 0 ){
            indexMusica = 2;
        }
        renderizarMusica(indexMusica);
    });

    document.querySelector('.proxima').addEventListener('click', () => {
        indexMusica ++;
        if  (indexMusica > 2) {
            indexMusica = 0;
        }
        renderizarMusica(indexMusica);
    });

    // Function

    function renderizarMusica(index){
        musica.setAttribute('src', musicas[index].src);
        musica.addEventListener('loadeddata', () => {
            nomeMusica.textContent = musicas[index].titulo;
            nomeArtista.textContent = musicas[index].artista;
            imagem.src = musicas[index].img;
            durationMusic.textContent = segundosParaMinutos(Math.floor(musica.duration));
        });
    }

    function tocarMusica(){
        musica.play();
        document.querySelector('.btn-pause').style.display = 'block';
        document.querySelector('.btn-play').style.display = 'none';
    }

    function pausarMusica(){
        musica.pause();
        document.querySelector('.btn-pause').style.display = 'none';
        document.querySelector('.btn-play').style.display = 'block';
    }

    function atualizarBarra(){
        let barra = document.querySelector('progress');
        barra.style.width = Math.floor((musica.currentTime / musica.duration)*100) + '%';
        let tempoDecorrido = document.querySelector('.start');
        tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
    }

    function segundosParaMinutos(segundos){
        let campoMinutos = Math.floor(segundos / 60);
        let campoSegundos = segundos  % 60 ;
        if (campoSegundos < 10){
            campoSegundos = '0' + campoSegundos;
        }

        return campoMinutos+':'+campoSegundos;
    }

    function duration(){
        let duracaoMusica = document.querySelector('.fim');
    
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(currentSong.duration));
    }
    


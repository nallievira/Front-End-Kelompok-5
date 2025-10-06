// data kuliner

const foodData = { tinutuan: { title: "Tinutuan / Bubur Manado", description: "Tinutuan adalah bubur gurih khas Manado yang unik karena tidak menggunakan daging, melainkan campuran aneka sayuran seperti labu kuning, kangkung, bayam, jagung, dan daun kemangi.", history: "Sejarah Tinutuan dipercaya berasal dari kondisi ekonomi yang sulit pada masa penjajahan, yang mendorong masyarakat untuk kreatif memanfaatkan hasil kebun. Nama 'Tinutuan' sendiri berarti 'tercampur aduk'." }, 'dabu-dabu': { title: "Sambal Dabu-Dabu", description: "Berbeda dari sambal pada umumnya yang diulek, Dabu-dabu adalah sambal segar yang dibuat dari bahan-bahan mentah yang diiris: cabai rawit, tomat, bawang merah, dan disiram dengan minyak kelapa panas serta perasan jeruk nipis.", history: "Dabu-dabu adalah warisan kuliner asli Minahasa yang mencerminkan kekayaan hasil bumi lokal. Kesegarannya diciptakan untuk menjadi pendamping sempurna hidangan laut bakar." }, kanari: { title: "Kue Kanari", description: "Kue kering tradisional yang terbuat dari tepung sagu dan kacang kenari. Memiliki tekstur keras namun renyah dengan rasa manis-gurih.", history: "Kue ini telah ada sejak zaman dahulu sebagai camilan masyarakat Minahasa, memanfaatkan sagu sebagai hasil alam setempat." }, cakalang: { title: "Cakalang Fufu", description: "Cakalang Fufu adalah hidangan ikan cakalang yang diawetkan dengan cara diasap. Proses ini memberikan aroma dan rasa 'smoky' yang sangat khas dan lezat.", history: "Metode pengasapan (fufu) adalah teknik pengawetan makanan tradisional oleh nelayan Minahasa untuk menyimpan hasil tangkapan yang melimpah." }, panada: { title: "Panada", description: "Panada adalah sejenis roti goreng yang diisi dengan suwiran ikan cakalang pedas. Adonan rotinya yang empuk dan sedikit manis berpadu sempurna dengan isiannya.", history: "Bentuk Panada diyakini mendapat pengaruh dari kuliner Spanyol atau Portugis 'empanada', yang diadaptasi dengan isian ikan cakalang khas lokal." }, klappertaart: { title: "Klappertaart", description: "Klappertaart adalah kue lembut dan creamy yang terbuat dari kelapa muda, susu, dan telur, sering diberi taburan kismis dan kayu manis.", history: "Nama 'Klappertaart' berasal dari bahasa Belanda. Hidangan ini adalah peninggalan kuliner era kolonial Belanda di Manado." }, brenebon: { title: "Sup Brenebon", description: "Sup kacang merah yang dimasak dengan kaldu daging sapi atau babi hingga empuk. Menghasilkan rasa yang gurih, sedikit manis, dan sangat menghangatkan.", history: "Nama 'Brenebon' berasal dari bahasa Belanda 'Bruine Bonen' yang berarti kacang coklat. Ini adalah contoh lain dari akulturasi kuliner Eropa dengan cita rasa lokal." }, ikantude: { title: "Ikan Tude Bakar", description: "Ikan Tude (sejenis ikan kembung) dibakar dengan bumbu sederhana lalu disajikan dengan sambal dabu-dabu. Menonjolkan kesegaran dari daging ikan itu sendiri.", history: "Sebagai daerah pesisir, hidangan ikan bakar adalah bagian tak terpisahkan dari budaya makan masyarakat Manado. Ikan Tude menjadi pilihan populer karena ketersediaannya." }, sambalroa: { title: "Sambal Roa", description: "Dibuat dari ikan roa asap yang dihaluskan lalu ditumis dengan cabai. Memiliki aroma ikan asap yang sangat kuat dengan rasa pedas dan gurih.", history: "Ikan Roa adalah ikan endemik perairan Sulawesi. Masyarakat lokal mengawetkannya dengan diasap dan menciptakan sambal ini agar praktis dan tahan lama." }, ayamwoku: { title: "Ayam Woku", description: "Ayam Woku dimasak dengan bumbu kaya rempah yang terdiri dari cabai, kunyit, kemiri, serta daun-daun aromatik seperti daun kemangi. Rasanya pedas, gurih, dan sangat segar.", history: "Nama 'Woku' sendiri merujuk pada daun woka (sejenis daun lontar) yang dulunya digunakan sebagai pembungkus saat memasak hidangan ini." }, ayamricarica: { title: "Ayam Rica-Rica", description: "Dalam bahasa Manado, 'rica' berarti cabai. Ayam Rica-Rica dimasak dengan bumbu cabai merah yang sangat melimpah hingga pedasnya benar-benar terasa 'menggigit'.", history: "Kecintaan masyarakat Minahasa terhadap rasa pedas tercermin dalam hidangan ini, di mana cabai tidak hanya sebagai penambah rasa, tetapi menjadi bintang utama masakan." }, ayamtinoransak: { title: "Ayam Tinoransak", description: "Teknik memasak tradisional di mana daging ayam dicincang dan dimasak dengan bumbu pedas dalam seruas bambu, lalu dibakar di atas bara api.", history: "Memasak dalam bambu adalah salah satu metode memasak paling purba di nusantara. Tinoransak sering disajikan dalam upacara adat dan perayaan besar." }, ragey: { title: "Ragey", description: "Ragey adalah sate babi khas Manado yang istimewa karena potongan dagingnya yang sangat besar. Daging dibumbui dengan rempah-rempah khas sebelum dibakar.", history: "Ragey mencerminkan budaya komunal dan perayaan di Minahasa. Potongan dagingnya yang besar cocok disantap bersama-sama dalam acara keluarga atau pesta." }, paniki: { title: "Paniki", description: "Salah satu hidangan kuliner ekstrem Manado yang menggunakan daging kelelawar pemakan buah. Dimasak dengan bumbu santan yang pedas dan kaya rempah.", history: "Pemanfaatan sumber daya alam secara maksimal adalah bagian dari kearifan lokal masyarakat Minahasa. Paniki adalah salah satu warisan dari tradisi berburu di hutan." }, rahangtuna: { title: "Rahang Tuna Bakar", description: "Bagian rahang dari ikan tuna sirip kuning yang besar dibakar di atas bara api. Bagian ini sangat digemari karena dagingnya yang tebal, lembut, dan sangat juicy.", history: "Manado adalah pusat industri perikanan tuna. Melimpahnya hasil tangkapan membuat masyarakat lokal ahli mengolah setiap bagian ikan, termasuk rahang." }, rintewuuk: { title: "Rintek Wuuk", description: "Kuliner ekstrem lainnya yang terbuat dari semut rangrang beserta telur dan larvanya (kroto). Ditumis dengan bumbu bawang dan cabai, rasanya unik, gurih, dan sedikit asam.", history: "Hidangan ini menunjukkan bagaimana masyarakat tradisional Minahasa memanfaatkan segala sesuatu yang disediakan oleh alam sebagai sumber protein." }, lalampa: { title: "Lalampa", description: "Lalampa adalah kudapan khas Manado yang terbuat dari beras ketan yang diaron dengan santan, kemudian diisi dengan suwiran ikan cakalang yang dimasak pedas dan gurih. Gulungan ketan ini kemudian dibungkus dengan daun pisang dan dibakar di atas bara api, memberikan aroma smoky yang khas.", history: "Lalampa sering dianggap sebagai versi Manado dari lemper. Perbedaan utamanya terletak pada proses akhir, di mana lalampa dibakar untuk menghasilkan aroma dan rasa yang lebih kuat, sementara lemper umumnya dikukus. Pembakaran ini mencerminkan adaptasi kuliner lokal yang menyukai cita rasa panggang." }, nasijaha: { title: "Nasi Jaha", description: "Nasi Jaha adalah hidangan nasi yang terbuat dari beras ketan dan santan yang dicampur dengan jahe (Jaha), lalu dimasukkan ke dalam batang bambu muda yang dilapisi daun pisang. Bambu ini kemudian dibakar di atas bara api hingga matang. Hasilnya adalah nasi yang pulen, gurih, dan sangat aromatik.", history: "Seperti Tinoransak, memasak dalam bambu adalah salah satu teknik kuliner tertua di Minahasa. Nasi Jaha secara tradisional sering dibuat untuk acara-acara khusus dan upacara adat sebagai simbol kebersamaan, karena proses pembuatannya yang komunal dan membutuhkan waktu." }, kuelampu: { title: "Kue Lampu-Lampu / Kue Perahu", description: "Kue Lampu-Lampu adalah kue basah tradisional Manado yang sangat lembut. Terbuat dari adonan tepung beras dan santan, kue ini memiliki rasa manis dan gurih, serta aroma wangi khas dari daun pandan yang digunakan sebagai wadah (takir) berbentuk perahu.", history: "Nama kue ini terinspirasi dari bentuk wadahnya yang menyerupai perahu atau lampu pelita tradisional. Penggunaan daun pandan sebagai cetakan alami adalah cerminan kearifan lokal dalam memanfaatkan hasil alam. Kue ini telah lama menjadi jajanan pasar favorit dan hidangan populer saat acara syukuran di Minahasa." }, kacanggoyang: { title: "Kacang Goyang", description: "Kacang Goyang adalah camilan khas dari Kotamobagu, Sulawesi Utara. Terbuat dari kacang tanah pilihan yang disalut dengan lapisan gula manis berwarna-warni. Proses pembuatannya yang unik dengan cara digoyang-goyang dalam wajan besar menghasilkan salut gula yang rata dan renyah.", history: "Nama 'Kacang Goyang' berasal dari metode pembuatannya yang khas. Camilan ini telah menjadi oleh-oleh ikonik dari daerah Bolaang Mongdow selama bertahun-tahun. Dibuat secara tradisional oleh industri rumahan, Kacang Goyang melambangkan cita rasa manis dan keramahan khas daerah tersebut." } };

// variabel global
let allFoodComments;
let userVotes; //   menyimpan status vote pengguna
const LOCAL_STORAGE_KEY_COMMENTS = 'kulinerManadoComments';
const LOCAL_STORAGE_KEY_VOTES = 'kulinerManadoUserVotes'; 

const defaultComments = { tinutuan: [{ user: "Admin", text: "Sangat sehat dan lezat!", timestamp: new Date(), likes: 10, dislikes: 0 }], 'dabu-dabu': [{ user: "Admin", text: "Pedasnya nampol! Segar banget.", timestamp: new Date(), likes: 15, dislikes: 1 }], kanari: [], cakalang: [], panada: [], klappertaart: [], brenebon: [], ikantude: [], sambalroa: [], ayamwoku: [], ayamricarica: [], ayamtinoransak: [], ragey: [], paniki: [], rahangtuna: [], rintewuuk: [], lalampa: [], nasijaha: [], kuelampu: [], kacanggoyang: [] };
let activeTastes = new Set();

// ENTRY POINT
document.addEventListener('DOMContentLoaded', function() {
    loadComments();
    loadVotes(); 
    setTypingAnimation();
    setupEventListeners();
    setupCardEntryAnimation();
});

//  fungsi penyimpanan komentar
function loadComments() { const stored = localStorage.getItem(LOCAL_STORAGE_KEY_COMMENTS); allFoodComments = stored ? JSON.parse(stored) : defaultComments; Object.keys(allFoodComments).forEach(id => { allFoodComments[id].forEach(c => { if (c.likes === undefined) c.likes = 0; if (c.dislikes === undefined) c.dislikes = 0; }); }); saveComments(); }
function saveComments() { localStorage.setItem(LOCAL_STORAGE_KEY_COMMENTS, JSON.stringify(allFoodComments)); }
// fungsi penyimpanan vote
function loadVotes() { const stored = localStorage.getItem(LOCAL_STORAGE_KEY_VOTES); userVotes = stored ? JSON.parse(stored) : {}; }
function saveVotes() { localStorage.setItem(LOCAL_STORAGE_KEY_VOTES, JSON.stringify(userVotes)); }

// fungsi modal pop-up
function openModal(foodId) { const data = foodData[foodId]; if (!data) return; const modal = document.getElementById('food-modal'); const modalImage = document.getElementById('modal-image'); const modalTitle = document.getElementById('modal-title'); const modalDescription = document.getElementById('modal-description'); const modalHistory = document.getElementById('modal-history'); const cardImage = document.querySelector(`.card[data-image-type="${foodId}"] .card-image-container img`); if (cardImage) { modalImage.src = cardImage.src; } modalTitle.textContent = data.title; modalDescription.textContent = data.description; modalHistory.textContent = data.history; modal.classList.add('is-visible'); document.body.style.overflow = 'hidden'; }
function closeModal() { const modal = document.getElementById('food-modal'); modal.classList.remove('is-visible'); document.body.style.overflow = ''; }

// system komentar
function setupCommentSystem() {
    document.querySelectorAll('.card').forEach(card => {
        const foodId = card.dataset.imageType;
        if (!foodId) return;
        renderComments(foodId);
        const commentForm = card.querySelector('.comment-form');
        commentForm?.addEventListener('submit', (e) => { e.preventDefault(); const input = commentForm.querySelector('.comment-input'); if (input && input.value.trim() !== "") { const newComment = { user: "Pengguna Anonim", text: input.value.trim(), timestamp: new Date().toISOString(), likes: 0, dislikes: 0 }; if (!allFoodComments[foodId]) allFoodComments[foodId] = []; allFoodComments[foodId].push(newComment); saveComments(); renderComments(foodId); input.value = ''; } });
        const toggleButton = card.querySelector('.toggle-comments-btn');
        toggleButton?.addEventListener('click', (e) => { e.stopPropagation(); card.querySelector('.comments-section')?.classList.toggle('hidden'); });
        const commentsList = card.querySelector('.comments-list');
        commentsList?.addEventListener('click', function(e) {
            const target = e.target.closest('button');
            if (!target) return;
            const timestamp = target.dataset.timestamp;
            const foodId = target.dataset.foodId;
            if (target.classList.contains('delete-comment-btn')) { if (confirm('Apakah Anda yakin ingin menghapus opini ini?')) deleteComment(foodId, timestamp); }
            if (target.classList.contains('vote-btn')) { const action = target.dataset.action; handleVote(foodId, timestamp, action); }
        });
    });
}

function renderComments(foodId) {
    const card = document.querySelector(`.card[data-image-type="${foodId}"]`);
    if (!card) return;
    const commentsList = card.querySelector('.comments-list');
    if (!commentsList) return;
    commentsList.innerHTML = ''; 
    const comments = allFoodComments[foodId] || [];
    if (comments.length === 0) { commentsList.innerHTML = '<li class="no-comment">Belum ada opini. Jadilah yang pertama!</li>'; } 
    else {
        comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        comments.forEach(comment => {
            const li = document.createElement('li');
            const commentDate = new Date(comment.timestamp).toLocaleString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
            const userVoteStatus = userVotes[comment.timestamp];
            const likeBtnClass = userVoteStatus === 'like' ? 'vote-btn active' : 'vote-btn';
            const dislikeBtnClass = userVoteStatus === 'dislike' ? 'vote-btn active' : 'vote-btn';
            
            li.className = 'comment-item';
            li.innerHTML = `
                <div class="comment-header"><strong>${comment.user}</strong><span class="comment-date">${commentDate}</span></div>
                <p class="comment-text">${comment.text}</p>
                <div class="comment-actions">
                    <button class="${likeBtnClass}" data-food-id="${foodId}" data-timestamp="${comment.timestamp}" data-action="like" title="Suka">👍</button>
                    <span class="vote-count">${comment.likes || 0}</span>
                    <button class="${dislikeBtnClass}" data-food-id="${foodId}" data-timestamp="${comment.timestamp}" data-action="dislike" title="Tidak Suka">👎</button>
                    <span class="vote-count">${comment.dislikes || 0}</span>
                </div>
                <button class="delete-comment-btn" data-food-id="${foodId}" data-timestamp="${comment.timestamp}" title="Hapus komentar ini">&times;</button>
            `;
            commentsList.appendChild(li);
        });
    }
}

function deleteComment(foodId, timestamp) { const comments = allFoodComments[foodId]; if (!comments) return; const i = comments.findIndex(c => c.timestamp === timestamp); if (i > -1) { comments.splice(i, 1); saveComments(); renderComments(foodId); } }

// mengelola vote suka/tidak suka
function handleVote(foodId, timestamp, action) {
    const comment = allFoodComments[foodId]?.find(c => c.timestamp === timestamp);
    if (!comment) return;

    const previousVote = userVotes[timestamp];

    // Jika pengguna menekan tombol yang sama lagi (membatalkan vote)
    if (previousVote === action) {
        if (action === 'like') comment.likes--;
        else comment.dislikes--;
        delete userVotes[timestamp];
    } 

    // Jika pengguna mengganti vote dari dislike ke like atau sebaliknya
    else if (previousVote) {
        if (previousVote === 'like') comment.likes--;
        else comment.dislikes--;
        
        if (action === 'like') comment.likes++;
        else comment.dislikes++;
        userVotes[timestamp] = action;
    } 

    // Jika ini adalah vote baru
    else {
        if (action === 'like') comment.likes++;
        else comment.dislikes++;
        userVotes[timestamp] = action;
    }

    saveComments();
    saveVotes();
    renderComments(foodId);
}

// fungsi query dan filter
function filterCards() { const searchTerm = document.getElementById('food-search').value.toLowerCase().trim(); const foodCards = document.querySelectorAll('.card'); foodCards.forEach(card => { const cardText = (card.querySelector('.card-title')?.textContent || '' + ' ' + card.querySelector('.card-description')?.textContent || '').toLowerCase(); const matchesSearch = searchTerm ? cardText.includes(searchTerm) : true; const cardTastes = card.dataset.tastes ? card.dataset.tastes.split(',') : []; const matchesTastes = activeTastes.size > 0 ? [...activeTastes].every(taste => cardTastes.includes(taste)) : true; const shouldBeVisible = matchesSearch && matchesTastes; if (shouldBeVisible) { card.classList.remove('is-hidden', 'is-fading-out'); } else { card.classList.add('is-fading-out'); card.addEventListener('transitionend', () => card.classList.add('is-hidden'), { once: true }); } }); }
function resetFilters() { document.getElementById('food-search').value = ''; document.querySelectorAll('.taste-filters button.active').forEach(b => b.classList.remove('active')); activeTastes.clear(); filterCards(); }

// setup fungsi event listener
function setupEventListeners() { document.querySelectorAll('.card-image-container').forEach(c => c.addEventListener('click', () => { if (c.dataset.imageType) openModal(c.dataset.imageType); })); const modal = document.getElementById('food-modal'); modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); }); document.querySelector('.modal-close')?.addEventListener('click', closeModal); document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); }); document.getElementById('food-search')?.addEventListener('input', filterCards); document.querySelectorAll('.taste-filters button[data-taste]').forEach(b => b.addEventListener('click', (e) => { e.stopPropagation(); const taste = b.dataset.taste; b.classList.toggle('active'); activeTastes.has(taste) ? activeTastes.delete(taste) : activeTastes.add(taste); filterCards(); })); document.getElementById('reset-filters')?.addEventListener('click', resetFilters); setupCommentSystem(); }
function setupCardEntryAnimation() { const cards = document.querySelectorAll('.card'); const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.remove('hidden-initial'); observer.unobserve(entry.target); } }); }, { threshold: 0.1 }); cards.forEach(card => { card.classList.add('hidden-initial'); observer.observe(card); }); }
function setTypingAnimation() { const h1 = document.querySelector('.typing-text'); if (!h1) return; const textLength = h1.textContent.length; const typingDuration = (textLength * 0.15).toFixed(2); h1.style.animation = 'none'; h1.style.animation = `typing ${typingDuration}s steps(${textLength}) forwards, blink 0.75s step-end infinite`; const totalAnimationTime = parseFloat(typingDuration) + 0.2; setTimeout(() => { h1.style.borderRight = 'none'; }, totalAnimationTime * 1000); }
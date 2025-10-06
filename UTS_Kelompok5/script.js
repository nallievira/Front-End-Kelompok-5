//data mknan Manado
const foodData = { tinutuan: { title: "Tinutuan / Bubur Manado", description: "Tinutuan adalah bubur gurih khas Manado yang unik karena tidak menggunakan daging, melainkan campuran aneka sayuran seperti labu kuning, kangkung, bayam, jagung, dan daun kemangi.", history: "Sejarah Tinutuan dipercaya berasal dari kondisi ekonomi yang sulit pada masa penjajahan, yang mendorong masyarakat untuk kreatif memanfaatkan hasil kebun. Nama 'Tinutuan' sendiri berarti 'tercampur aduk'." }, 'dabu-dabu': { title: "Sambal Dabu-Dabu", description: "Berbeda dari sambal pada umumnya yang diulek, Dabu-dabu adalah sambal segar yang dibuat dari bahan-bahan mentah yang diiris: cabai rawit, tomat, bawang merah, dan disiram dengan minyak kelapa panas serta perasan jeruk nipis.", history: "Dabu-dabu adalah warisan kuliner asli Minahasa yang mencerminkan kekayaan hasil bumi lokal. Kesegarannya diciptakan untuk menjadi pendamping sempurna hidangan laut bakar." }, kanari: { title: "Kue Kanari", description: "Kue kering tradisional yang terbuat dari tepung sagu dan kacang kenari. Memiliki tekstur keras namun renyah dengan rasa manis-gurih.", history: "Kue ini telah ada sejak zaman dahulu sebagai camilan masyarakat Minahasa, memanfaatkan sagu sebagai hasil alam setempat." }, cakalang: { title: "Cakalang Fufu", description: "Cakalang Fufu adalah hidangan ikan cakalang yang diawetkan dengan cara diasap. Proses ini memberikan aroma dan rasa 'smoky' yang sangat khas dan lezat.", history: "Metode pengasapan (fufu) adalah teknik pengawetan makanan tradisional oleh nelayan Minahasa untuk menyimpan hasil tangkapan yang melimpah." }, panada: { title: "Panada", description: "Panada adalah sejenis roti goreng yang diisi dengan suwiran ikan cakalang pedas. Adonan rotinya yang empuk dan sedikit manis berpadu sempurna dengan isiannya.", history: "Bentuk Panada diyakini mendapat pengaruh dari kuliner Spanyol atau Portugis 'empanada', yang diadaptasi dengan isian ikan cakalang khas lokal." }, klappertaart: { title: "Klappertaart", description: "Klappertaart adalah kue lembut dan creamy yang terbuat dari kelapa muda, susu, dan telur, sering diberi taburan kismis dan kayu manis.", history: "Nama 'Klappertaart' berasal dari bahasa Belanda. Hidangan ini adalah peninggalan kuliner era kolonial Belanda di Manado." }, brenebon: { title: "Sup Brenebon", description: "Sup kacang merah yang dimasak dengan kaldu daging sapi atau babi hingga empuk. Menghasilkan rasa yang gurih, sedikit manis, dan sangat menghangatkan.", history: "Nama 'Brenebon' berasal dari bahasa Belanda 'Bruine Bonen' yang berarti kacang coklat. Ini adalah contoh lain dari akulturasi kuliner Eropa dengan cita rasa lokal." }, ikantude: { title: "Ikan Tude Bakar", description: "Ikan Tude (sejenis ikan kembung) dibakar dengan bumbu sederhana lalu disajikan dengan sambal dabu-dabu. Menonjolkan kesegaran dari daging ikan itu sendiri.", history: "Sebagai daerah pesisir, hidangan ikan bakar adalah bagian tak terpisahkan dari budaya makan masyarakat Manado. Ikan Tude menjadi pilihan populer karena ketersediaannya." }, sambalroa: { title: "Sambal Roa", description: "Dibuat dari ikan roa asap yang dihaluskan lalu ditumis dengan cabai. Memiliki aroma ikan asap yang sangat kuat dengan rasa pedas dan gurih.", history: "Ikan Roa adalah ikan endemik perairan Sulawesi. Masyarakat lokal mengawetkannya dengan diasap dan menciptakan sambal ini agar praktis dan tahan lama." }, ayamwoku: { title: "Ayam Woku", description: "Ayam Woku dimasak dengan bumbu kaya rempah yang terdiri dari cabai, kunyit, kemiri, serta daun-daun aromatik seperti daun kemangi. Rasanya pedas, gurih, dan sangat segar.", history: "Nama 'Woku' sendiri merujuk pada daun woka (sejenis daun lontar) yang dulunya digunakan sebagai pembungkus saat memasak hidangan ini." }, ayamricarica: { title: "Ayam Rica-Rica", description: "Dalam bahasa Manado, 'rica' berarti cabai. Ayam Rica-Rica dimasak dengan bumbu cabai merah yang sangat melimpah hingga pedasnya benar-benar terasa 'menggigit'.", history: "Kecintaan masyarakat Minahasa terhadap rasa pedas tercermin dalam hidangan ini, di mana cabai tidak hanya sebagai penambah rasa, tetapi menjadi bintang utama masakan." }, ayamtinoransak: { title: "Ayam Tinoransak", description: "Teknik memasak tradisional di mana daging ayam dicincang dan dimasak dengan bumbu pedas dalam seruas bambu, lalu dibakar di atas bara api.", history: "Memasak dalam bambu adalah salah satu metode memasak paling purba di nusantara. Tinoransak sering disajikan dalam upacara adat dan perayaan besar." }, ragey: { title: "Ragey", description: "Ragey adalah sate babi khas Manado yang istimewa karena potongan dagingnya yang sangat besar. Daging dibumbui dengan rempah-rempah khas sebelum dibakar.", history: "Ragey mencerminkan budaya komunal dan perayaan di Minahasa. Potongan dagingnya yang besar cocok disantap bersama-sama dalam acara keluarga atau pesta." }, paniki: { title: "Paniki", description: "Salah satu hidangan kuliner ekstrem Manado yang menggunakan daging kelelawar pemakan buah. Dimasak dengan bumbu santan yang pedas dan kaya rempah.", history: "Pemanfaatan sumber daya alam secara maksimal adalah bagian dari kearifan lokal masyarakat Minahasa. Paniki adalah salah satu warisan dari tradisi berburu di hutan." }, rahangtuna: { title: "Rahang Tuna Bakar", description: "Bagian rahang dari ikan tuna sirip kuning yang besar dibakar di atas bara api. Bagian ini sangat digemari karena dagingnya yang tebal, lembut, dan sangat juicy.", history: "Manado adalah pusat industri perikanan tuna. Melimpahnya hasil tangkapan membuat masyarakat lokal ahli mengolah setiap bagian ikan, termasuk rahang." }, rintewuuk: { title: "Rintek Wuuk", description: "Kuliner ekstrem lainnya yang terbuat dari semut rangrang beserta telur dan larvanya (kroto). Ditumis dengan bumbu bawang dan cabai, rasanya unik, gurih, dan sedikit asam.", history: "Hidangan ini menunjukkan bagaimana masyarakat tradisional Minahasa memanfaatkan segala sesuatu yang disediakan oleh alam sebagai sumber protein." }, lalampa: { title: "Lalampa", description: "Lalampa adalah kudapan khas Manado yang terbuat dari beras ketan yang diaron dengan santan, kemudian diisi dengan suwiran ikan cakalang yang dimasak pedas dan gurih. Gulungan ketan ini kemudian dibungkus dengan daun pisang dan dibakar di atas bara api, memberikan aroma smoky yang khas.", history: "Lalampa sering dianggap sebagai versi Manado dari lemper. Perbedaan utamanya terletak pada proses akhir, di mana lalampa dibakar untuk menghasilkan aroma dan rasa yang lebih kuat, sementara lemper umumnya dikukus. Pembakaran ini mencerminkan adaptasi kuliner lokal yang menyukai cita rasa panggang." }, nasijaha: { title: "Nasi Jaha", description: "Nasi Jaha adalah hidangan nasi yang terbuat dari beras ketan dan santan yang dicampur dengan jahe (Jaha), lalu dimasukkan ke dalam batang bambu muda yang dilapisi daun pisang. Bambu ini kemudian dibakar di atas bara api hingga matang. Hasilnya adalah nasi yang pulen, gurih, dan sangat aromatik.", history: "Seperti Tinoransak, memasak dalam bambu adalah salah satu teknik kuliner tertua di Minahasa. Nasi Jaha secara tradisional sering dibuat untuk acara-acara khusus dan upacara adat sebagai simbol kebersamaan, karena proses pembuatannya yang komunal dan membutuhkan waktu." }, kuelampu: { title: "Kue Lampu-Lampu / Kue Perahu", description: "Kue Lampu-Lampu adalah kue basah tradisional Manado yang sangat lembut. Terbuat dari adonan tepung beras dan santan, kue ini memiliki rasa manis dan gurih, serta aroma wangi khas dari daun pandan yang digunakan sebagai wadah (takir) berbentuk perahu.", history: "Nama kue ini terinspirasi dari bentuk wadahnya yang menyerupai perahu atau lampu pelita tradisional. Penggunaan daun pandan sebagai cetakan alami adalah cerminan kearifan lokal dalam memanfaatkan hasil alam. Kue ini telah lama menjadi jajanan pasar favorit dan hidangan populer saat acara syukuran di Minahasa." }, kacanggoyang: { title: "Kacang Goyang", description: "Kacang Goyang adalah camilan khas dari Kotamobagu, Sulawesi Utara. Terbuat dari kacang tanah pilihan yang disalut dengan lapisan gula manis berwarna-warni. Proses pembuatannya yang unik dengan cara digoyang-goyang dalam wajan besar menghasilkan salut gula yang rata dan renyah.", history: "Nama 'Kacang Goyang' berasal dari metode pembuatannya yang khas. Camilan ini telah menjadi oleh-oleh ikonik dari daerah Bolaang Mongdow selama bertahun-tahun. Dibuat secara tradisional oleh industri rumahan, Kacang Goyang melambangkan cita rasa manis dan keramahan khas daerah tersebut." } };

//var global
let allComments;
let userVotes;
let userRatings = {};
let activeFilter = 'all';
const COMMENT_KEY = 'kulinerManadoComments';
const VOTE_KEY = 'kulinerManadoUserVotes';
const RATING_KEY = 'kulinerManadoRatings';

const defaultComments = { tinutuan: [{ user: "Admin", text: "Sangat sehat dan lezat!", timestamp: new Date(), likes: 10, dislikes: 0 }], 'dabu-dabu': [{ user: "Admin", text: "Pedasnya nampol! Segar banget.", timestamp: new Date(), likes: 15, dislikes: 1 }], kanari: [], cakalang: [], panada: [], klappertaart: [], brenebon: [], ikantude: [], sambalroa: [], ayamwoku: [], ayamricarica: [], ayamtinoransak: [], ragey: [], paniki: [], rahangtuna: [], rintewuuk: [], lalampa: [], nasijaha: [], kuelampu: [], kacanggoyang: [] };

//fungsi modaltest buat debug
window.testModal = function(foodId) {
    openModal(foodId || 'tinutuan');
};

//load halaman HTML
document.addEventListener('DOMContentLoaded', function() {
    loadComments();
    loadVotes();
    loadRatings();
    setupScrollAnimation();
    setupEventListeners();
    setupCardEntryAnimation();
    setupCarousel();
    setupBurgerMenu();
    setupStarRating();
    setupFilters();
    setupNavigation();
    setupSearchSuggestions();
    setupModalComments();
    setupPageRouting();
});

//buat load komentar
function loadComments() {
    const stored = localStorage.getItem(COMMENT_KEY);
    allComments = stored ? JSON.parse(stored) : defaultComments;
    Object.keys(allComments).forEach(id => {
        allComments[id].forEach(c => {
            if (c.likes === undefined) c.likes = 0;
            if (c.dislikes === undefined) c.dislikes = 0;
        });
    });
    saveComments();
}

//buat simpan komentar
function saveComments() {
    localStorage.setItem(COMMENT_KEY, JSON.stringify(allComments));
}

//buat load vote
function loadVotes() {
    const stored = localStorage.getItem(VOTE_KEY);
    userVotes = stored ? JSON.parse(stored) : {};
}

//buat simpan vote
function saveVotes() {
    localStorage.setItem(VOTE_KEY, JSON.stringify(userVotes));
}

//buat load rating
function loadRatings() {
    const stored = localStorage.getItem(RATING_KEY);
    userRatings = stored ? JSON.parse(stored) : {};
}

//buat simpan rating
function saveRatings() {
    localStorage.setItem(RATING_KEY, JSON.stringify(userRatings));
}
//buat set rating makanan
function setRating(foodId, rating) {
    userRatings[foodId] = rating;
    saveRatings();
    updateStarDisplay(foodId, rating);
    applyFilters();
}
//fungsi dpt rating
function getRating(foodId) {
    return userRatings[foodId] || 0;
}

//buat openmodal
function openModal(foodId) {
    const data = foodData[foodId];
    if (!data) return;
    
    const modal = document.getElementById('food-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalHistory = document.getElementById('modal-history');
    
    if (!modal) return;
    
    const carouselImage = document.querySelector(`.carousel-slide[data-food="${foodId}"] .carousel-image img`);
    if (carouselImage) {
        modalImage.src = carouselImage.src;
    }
    
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalHistory.textContent = data.history;
    
    const modalStarRating = document.getElementById('modalStarRating');
    if (modalStarRating) {
        modalStarRating.setAttribute('data-food-id', foodId);
        updateModalStarDisplay(foodId);
    }
    
    renderModalComments(foodId);
    
    modal.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('food-modal');
    if (modal) {
        modal.classList.remove('is-visible');
        document.body.style.overflow = '';
    }
}

//sistem komen
function setupCommentSystem() {
    document.querySelectorAll('.card').forEach(card => {
        const foodId = card.dataset.imageType;
        if (!foodId) return;
        
        renderComments(foodId);
        
        const commentForm = card.querySelector('.comment-form');
        commentForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = commentForm.querySelector('.comment-input');
            if (input && input.value.trim() !== "") {
                const newComment = {
                    user: "Anonymous User",
                    text: input.value.trim(),
                    timestamp: new Date().toISOString(),
                    likes: 0,
                    dislikes: 0
                };
                if (!allComments[foodId]) allComments[foodId] = [];
                allComments[foodId].push(newComment);
                saveComments();
                renderComments(foodId);
                input.value = '';
            }
        });
        
        const toggleButton = card.querySelector('.toggle-comments-btn');
        toggleButton?.addEventListener('click', (e) => {
            e.stopPropagation();
            card.querySelector('.comments-section')?.classList.toggle('hidden');
        });
    });
}

// Vote handling
function handleVote(foodId, timestamp, action) {
    const comment = allComments[foodId]?.find(c => c.timestamp === timestamp);
    if (!comment) return;

    const previousVote = userVotes[timestamp];

    if (previousVote === action) {
        if (action === 'like') comment.likes--;
        else comment.dislikes--;
        delete userVotes[timestamp];
    } else if (previousVote) {
        if (previousVote === 'like') comment.likes--;
        else comment.dislikes--;
        
        if (action === 'like') comment.likes++;
        else comment.dislikes++;
        userVotes[timestamp] = action;
    } else {
        if (action === 'like') comment.likes++;
        else comment.dislikes++;
        userVotes[timestamp] = action;
    }

    saveComments();
    saveVotes();
    renderComments(foodId);
}

// fungsi filter
function filterCarousel() {
    const searchTerm = document.getElementById('food-search').value.toLowerCase().trim();
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    
    carouselSlides.forEach(slide => {
        const foodId = slide.dataset.food;
        const foodTitle = slide.querySelector('.carousel-title')?.textContent.toLowerCase() || '';
        
        const matchesSearch = searchTerm ? foodTitle.includes(searchTerm) : true;
        const matchesFilter = checkFilterCriteria(foodId);
        const shouldBeVisible = matchesSearch && matchesFilter;
        
        if (shouldBeVisible) {
            slide.style.display = 'block';
            slide.classList.remove('filtered-out');
        } else {
            slide.style.display = 'none';
            slide.classList.add('filtered-out');
        }
    });
}

//fungsi cek kriteria pada filter
function checkFilterCriteria(foodId) {
    const rating = getRating(foodId);
    const hasComments = allComments[foodId] && allComments[foodId].length > 0;
    
    if (activeFilter.startsWith('star-')) {
        const targetRating = parseInt(activeFilter.replace('star-', ''));
        return rating === targetRating;
    }
    
    switch (activeFilter) {
        case 'all':
            return true;
        case 'with-comments':
            return hasComments;
        case 'no-rating':
            return rating === 0;
        default:
            return true;
    }
}


function applyFilters() {
    filterCarousel();
}

function resetAllFilters() {
    document.getElementById('food-search').value = '';
    activeFilter = 'all';
    document.querySelectorAll('.filter-btn.active').forEach(b => b.classList.remove('active'));
    document.querySelector('.filter-btn[data-filter="all"]')?.classList.add('active');
    filterCarousel();
}


function setupEventListeners() {
    const modal = document.getElementById('food-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        const closeButton = modal.querySelector('.modal-close');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                closeModal();
            });
        }
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    const searchInput = document.getElementById('food-search');
    if (searchInput) {
        searchInput.addEventListener('input', filterCarousel);
    }
    
    setupCommentSystem();
}


function setupCardEntryAnimation() {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden-initial');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    cards.forEach(card => {
        card.classList.add('hidden-initial');
        observer.observe(card);
    });
}


function setupScrollAnimation() {
    let hasAppeared = {
        rasa: false,
        manado: false,
        subtitle: false,
        navbar: false
    };
    
    $(document).ready(function() {
        $(window).trigger('scroll');
    });
    
    $(window).on('scroll', function() {
        const scrollY = $(window).scrollTop();
        
      
        if (!hasAppeared.rasa) {
            if (scrollY >= 10) {
                const progress = Math.min(scrollY / 100, 1);
                $('.screen-title-rasa').css({
                    'opacity': progress,
                    'transform': `translateX(-60%) translateY(${30 - (progress * 30)}px)`
                });
                
                if (progress >= 1) {
                    hasAppeared.rasa = true;
                }
            }
        }
        
        if (!hasAppeared.manado) {
            if (scrollY >= 50) {
                const progress = Math.min((scrollY - 50) / 100, 1);
                $('.screen-title-manado').css({
                    'opacity': progress,
                    'transform': `translateY(${40 - (progress * 40)}px)`
                });
                
                if (progress >= 1) {
                    hasAppeared.manado = true;
                }
            }
        }

        if (!hasAppeared.navbar && scrollY > 100) {
            $('#topNavBar').css({
                'opacity': 1,
                'transform': 'translateY(0%)'
            });
            hasAppeared.navbar = true;
        }
     
        
        if (!hasAppeared.subtitle) {
            if (scrollY >= 150) {
                const progress = Math.min((scrollY - 150) / 100, 1);
                $('.hero-subtitle').css({
                    'opacity': progress,
                    'transform': `translateY(${60 - (progress * 60)}px)`
                });
                
                if (progress >= 1) {
                    hasAppeared.subtitle = true;
                }
            }
        }
        
        const carouselTop = $('.carousel-container').offset()?.top || 9999;
        if (scrollY > carouselTop - $(window).height() + 200) {
            $('.top-left-search').fadeIn(300);
        } else {
            $('.top-left-search').fadeOut(200);
        }
    });
}

//burgermenu
function setupBurgerMenu() {
    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');
    const topNavItems = document.querySelectorAll('.top-nav-item');
    const burgerIcon = document.getElementById('burgerIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    if (!burgerMenu || !navMenu) return;
    
    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            burgerIcon.style.display = 'none';
            closeIcon.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            burgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    topNavItems.forEach(item => {
        item.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    document.addEventListener('click', function(e) {
        if (!burgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
            closeMenu();
        }
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
    
    function closeMenu() {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        burgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        document.body.style.overflow = '';
    }
}

//sistem rating pke bintang
function setupStarRating() {
    document.querySelectorAll('.star-rating').forEach(starRating => {
        const foodId = starRating.getAttribute('data-food-id');
        if (foodId) {
            updateStarDisplay(foodId, getRating(foodId));
            setupStarClickHandler(starRating, foodId);
        }
    });
    
    const modalStarRating = document.getElementById('modalStarRating');
    if (modalStarRating) {
        setupModalStarClickHandler(modalStarRating);
    }
}

function setupStarClickHandler(starRating, foodId) {
    const stars = starRating.querySelectorAll('.star');
    
    stars.forEach((star) => {
        const rating = parseInt(star.getAttribute('data-rating'));
        
        star.addEventListener('click', (e) => {
            e.stopPropagation();
            setRating(foodId, rating);
        });
        
        star.addEventListener('mouseenter', () => {
            highlightStars(starRating, rating);
        });
    });
    
    starRating.addEventListener('mouseleave', () => {
        updateStarDisplay(foodId, getRating(foodId));
    });
}

function updateStarDisplay(foodId, rating) {
    const starRating = document.querySelector(`.star-rating[data-food-id="${foodId}"]`);
    if (starRating) {
        const stars = starRating.querySelectorAll('.star');
        stars.forEach((star, index) => {
            const starRating = index + 1;
            star.classList.toggle('active', starRating <= rating);
            star.classList.remove('hover-effect');
        });
    }
}

function updateModalStarDisplay(foodId) {
    const modalStarRating = document.getElementById('modalStarRating');
    if (modalStarRating) {
        const rating = getRating(foodId);
        const stars = modalStarRating.querySelectorAll('.star');
        stars.forEach((star, index) => {
            const starRating = index + 1;
            star.classList.toggle('active', starRating <= rating);
            star.classList.remove('hover-effect');
        });
    }
}

function highlightStars(container, rating) {
    const stars = container.querySelectorAll('.star');
    stars.forEach((star, index) => {
        const starRating = index + 1;
        star.classList.toggle('hover-effect', starRating <= rating);
        star.classList.toggle('active', starRating <= rating);
    });
}

function setupModalStarClickHandler(modalStarRating) {
    const stars = modalStarRating.querySelectorAll('.star');
    const foodId = modalStarRating.getAttribute('data-food-id');
    
    stars.forEach((star) => {
        const rating = parseInt(star.getAttribute('data-rating'));
        
        star.addEventListener('click', (e) => {
            e.stopPropagation();
            setRating(foodId, rating);
            updateModalStarDisplay(foodId);
        });
        
        star.addEventListener('mouseenter', () => {
            highlightStars(modalStarRating, rating);
        });
    });
    
    modalStarRating.addEventListener('mouseleave', () => {
        updateModalStarDisplay(foodId);
    });
}

//filter
function setupFilters() {
    const filterToggle = document.getElementById('filter-toggle');
    const filterDropdown = document.getElementById('filter-dropdown');
    const starSlider = document.getElementById('star-slider');
    const starInput = document.getElementById('star-input');
    const miniBtns = document.querySelectorAll('.mini-btn');
    
    if (filterToggle) {
        filterToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFilterDropdown();
        });
    }
    
    document.addEventListener('click', (e) => {
        if (filterDropdown && !filterDropdown.contains(e.target) && !filterToggle.contains(e.target)) {
            closeFilterDropdown();
        }
    });
    
    if (starSlider) {
        starSlider.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            updateStarFilter(value);
            if (starInput) starInput.value = value;
        });
    }
    
    if (starInput) {
        starInput.addEventListener('input', (e) => {
            let value = parseInt(e.target.value);
            if (isNaN(value)) value = 0;
            if (value < 0) value = 0;
            if (value > 5) value = 5;
            
            e.target.value = value;
            updateStarFilter(value);
            if (starSlider) starSlider.value = value;
        });
    }
    
    miniBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = btn.getAttribute('data-filter');
            
            if (filter === 'reset') {
                resetAllFilters();
            } else {
                setActiveFilter(filter);
            }
            
            closeFilterDropdown();
        });
    });
    
    setActiveFilter('all');
    updateStarFilterText(0);
    updateFilterIndicator('Semua');
}

function toggleFilterDropdown() {
    const filterToggle = document.getElementById('filter-toggle');
    const filterDropdown = document.getElementById('filter-dropdown');
    
    if (filterDropdown) {
        const isOpen = filterDropdown.classList.contains('show');
        
        if (isOpen) {
            closeFilterDropdown();
        } else {
            openFilterDropdown();
        }
    }
}

function openFilterDropdown() {
    const filterToggle = document.getElementById('filter-toggle');
    const filterDropdown = document.getElementById('filter-dropdown');
    
    if (filterToggle) filterToggle.classList.add('active');
    if (filterDropdown) filterDropdown.classList.add('show');
}

function closeFilterDropdown() {
    const filterToggle = document.getElementById('filter-toggle');
    const filterDropdown = document.getElementById('filter-dropdown');
    
    if (filterToggle) filterToggle.classList.remove('active');
    if (filterDropdown) filterDropdown.classList.remove('show');
}

function updateFilterIndicator(text) {
    const indicator = document.getElementById('active-filter-indicator');
    if (indicator) {
        indicator.textContent = text;
    }
}

function updateStarFilter(starValue) {
    if (starValue === 0) {
        setActiveFilter('all');
        updateFilterIndicator('Semua');
    } else {
        setActiveFilter(`star-${starValue}`);
        updateFilterIndicator(`${starValue} Bintang`);
    }
    
    updateStarFilterText(starValue);
}

function updateStarFilterText(starValue) {
    const starDisplay = document.getElementById('star-display');
    const starText = starDisplay?.querySelector('.star-text');
    
    if (!starText) return;
    
    if (starValue === 0) {
        starText.innerHTML = 'Tampilkan semua makanan';
    } else {
        const stars = '⭐'.repeat(starValue);
        starText.innerHTML = `<span class="active-stars">${stars}</span>Tampilkan makanan dengan rating ${starValue} bintang`;
    }
}

function setActiveFilter(filter) {
    document.querySelectorAll('.mini-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    let indicatorText = 'Semua';
    
    if (filter.startsWith('star-')) {
        const starValue = filter.replace('star-', '');
        indicatorText = `${starValue} Bintang`;
    } else {
        const activeBtn = document.querySelector(`.mini-btn[data-filter="${filter}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
        
        switch (filter) {
            case 'all':
                indicatorText = 'Semua';
                break;
            case 'with-comments':
                indicatorText = 'Ada Komentar';
                break;
            case 'no-rating':
                indicatorText = 'Belum Dinilai';
                break;
        }
    }
    
    updateFilterIndicator(indicatorText);
    activeFilter = filter;
    applyFilters();
}

//sistem navigasi
function setupNavigation() {
    const aboutNav = document.getElementById('tentangRasaNav');
    if (aboutNav) {
        aboutNav.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.getElementById('tentang-rasa');
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

//saran pencarian
function setupSearchSuggestions() {
    const searchInput = document.getElementById('food-search');
    const suggestionsContainer = document.getElementById('search-suggestions');
    
    if (!searchInput || !suggestionsContainer) return;
    
    const foodList = Object.keys(foodData).map(key => ({
        id: key,
        title: foodData[key].title,
        searchText: foodData[key].title.toLowerCase()
    }));
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length === 0) {
            hideSuggestions();
            return;
        }
        
        const matches = foodList.filter(food => 
            food.searchText.includes(query)
        ).slice(0, 8);
        
        if (matches.length > 0) {
            showSuggestions(matches, query);
        } else {
            showNoResults();
        }
    });
    
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
            hideSuggestions();
        }
    });
    
    function showSuggestions(matches, query) {
        const html = matches.map(food => `
            <div class="suggestion-item" data-food-id="${food.id}">
                <i class="fas fa-utensils suggestion-icon"></i>
                <span>${highlightMatch(food.title, query)}</span>
            </div>
        `).join('');
        
        suggestionsContainer.innerHTML = html;
        suggestionsContainer.classList.add('show');
        
        suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                const foodId = item.getAttribute('data-food-id');
                openModal(foodId);
                hideSuggestions();
                searchInput.value = foodData[foodId].title;
            });
        });
    }
    
    function showNoResults() {
        suggestionsContainer.innerHTML = `
            <div class="suggestion-item">
                <i class="fas fa-search suggestion-icon"></i>
                <span style="color: #999;">No results found</span>
            </div>
        `;
        suggestionsContainer.classList.add('show');
    }
    
    function hideSuggestions() {
        suggestionsContainer.classList.remove('show');
    }
    
    function highlightMatch(text, query) {
        const index = text.toLowerCase().indexOf(query.toLowerCase());
        if (index === -1) return text;
        
        return text.substring(0, index) + 
               '<strong style="color: #85B3DA;">' + 
               text.substring(index, index + query.length) + 
               '</strong>' + 
               text.substring(index + query.length);
    }
}

//komentar
function setupModalComments() {
    const submitBtn = document.getElementById('modal-comment-submit');
    if (submitBtn) {
        submitBtn.addEventListener('click', handleModalCommentSubmit);
    }
    
    const textarea = document.getElementById('modal-comment-text');
    if (textarea) {
        textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                handleModalCommentSubmit();
            }
        });
    }
}

function handleModalCommentSubmit() {
    const userInput = document.getElementById('modal-comment-user');
    const textInput = document.getElementById('modal-comment-text');
    const modalStarRating = document.getElementById('modalStarRating');
    
    if (!textInput || !modalStarRating) return;
    
    const foodId = modalStarRating.getAttribute('data-food-id');
    const userName = userInput?.value.trim() || 'Anonymous Visitor';
    const commentText = textInput.value.trim();
    
    if (!commentText || !foodId) {
        alert('Please write a comment first!');
        return;
    }
    
    const newComment = {
        user: userName,
        text: commentText,
        timestamp: new Date().toISOString(),
        likes: 0,
        dislikes: 0
    };
    
    if (!allComments[foodId]) {
        allComments[foodId] = [];
    }
    allComments[foodId].unshift(newComment);
    
    saveComments();
    renderModalComments(foodId);
    applyFilters();
    
    if (userInput) userInput.value = '';
    textInput.value = '';
    
    showTemporaryMessage('Comment added successfully!', 'success');
}

function renderModalComments(foodId) {
    const commentsList = document.getElementById('modal-comments-list');
    if (!commentsList) return;
    
    const comments = allComments[foodId] || [];
    
    if (comments.length === 0) {
        commentsList.innerHTML = `
            <div style="text-align: center; color: #999; padding: 20px;">
                <i class="fas fa-comment-slash" style="font-size: 24px; margin-bottom: 10px;"></i><br>
                Belum ada komentar, Jadilah yang pertama!
            </div>
        `;
        return;
    }
    
    const html = comments.slice(0, 10).map(comment => {
        const date = new Date(comment.timestamp).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        return `
            <div class="modal-comment-item">
                <div class="modal-comment-header">
                    <span class="modal-comment-user">
                        <i class="fas fa-user-circle" style="margin-right: 5px;"></i>
                        ${comment.user}
                    </span>
                    <span class="modal-comment-date">${date}</span>
                </div>
                <div class="modal-comment-text">${comment.text}</div>
            </div>
        `;
    }).join('');
    
    commentsList.innerHTML = html;
}

// Page Routing System
function setupPageRouting() {
    const historyNav = document.getElementById('sejarahKulinerNav');
    const backBtn = document.getElementById('back-to-main');
    
    if (historyNav) {
        historyNav.addEventListener('click', (e) => {
            e.preventDefault();
            showHistoryPage();
        });
    }
    
    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showMainPage();
        });
    }
}

function showHistoryPage() {
    const mainContent = document.getElementById('main-content');
    const historyPage = document.getElementById('history-page');
    const introScreen = document.getElementById('screen-intro');
    const topNavBar = document.getElementById('topNavBar');
    
    if (mainContent) mainContent.style.display = 'none';
    if (introScreen) introScreen.style.display = 'none';
    if (topNavBar) topNavBar.style.display = 'none';
    
    if (historyPage) {
        historyPage.style.display = 'block';
        populateHistoryContent();
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMainPage() {
    const mainContent = document.getElementById('main-content');
    const historyPage = document.getElementById('history-page');
    const introScreen = document.getElementById('screen-intro');
    const topNavBar = document.getElementById('topNavBar');
    
    if (mainContent) mainContent.style.display = 'block';
    if (introScreen) introScreen.style.display = 'block';
    if (topNavBar) topNavBar.style.display = 'block';
    
    if (historyPage) historyPage.style.display = 'none';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function populateHistoryContent() {
    const historyContent = document.getElementById('history-content');
    if (!historyContent) return;
    
    const historyItems = Object.keys(foodData).map(foodId => {
        const food = foodData[foodId];
        const imageSrc = getFoodImageSrc(foodId);
        
        return `
            <div class="history-item" data-food-id="${foodId}">
                <img src="${imageSrc}" alt="${food.title}" class="history-item-image">
                <div class="history-item-content">
                    <h3 class="history-item-title">${food.title}</h3>
                    <p class="history-item-text">${food.history}</p>
                </div>
            </div>
        `;
    }).join('');
    
    historyContent.innerHTML = historyItems;
    
    historyContent.querySelectorAll('.history-item').forEach(item => {
        item.addEventListener('click', () => {
            const foodId = item.getAttribute('data-food-id');
            showMainPage();
            setTimeout(() => {
                openModal(foodId);
            }, 300);
        });
    });
}

function getFoodImageSrc(foodId) {
    const slide = document.querySelector(`.carousel-slide[data-food="${foodId}"] img`);
    return slide ? slide.src : 'assets/placeholder.jpg';
}

function setupCarousel() {
    const $wrapper = $('.carousel-wrapper');
    const $slides = $('.carousel-slide');
    const scrollAmount = 320;
    
    if ($wrapper.length === 0 || $slides.length === 0) return;
    
    $('#carouselNext').on('click', function() {
        $wrapper.animate({
            scrollLeft: $wrapper.scrollLeft() + scrollAmount
        }, 400, 'swing');
    });
    
    $('#carouselPrev').on('click', function() {
        $wrapper.animate({
            scrollLeft: $wrapper.scrollLeft() - scrollAmount
        }, 400, 'swing');
    });
    
    $slides.off('click');
    
    $slides.each(function(index) {
        const $slide = $(this);
        const foodId = $slide.data('food');
        
        $slide.on('click', function(e) {
            e.stopPropagation();
            
            if (foodId) {
                openModal(foodId);
            }
        });
    });
    
    $slides.on('mouseenter', function() {
        $(this).find('.carousel-card').css({
            'transform': 'scale(1.05)',
            'transition': 'transform 0.3s ease'
        });
    }).on('mouseleave', function() {
        $(this).find('.carousel-card').css({
            'transform': 'scale(1)',
            'transition': 'transform 0.3s ease'
        });
    });
    
    $(document).on('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            $('#carouselPrev').click();
        } else if (e.key === 'ArrowRight') {
            $('#carouselNext').click();
        }
    });
}


function showTemporaryMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#85B3DA' : '#f44336'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 10000;
        font-family: 'Coolvetica', sans-serif;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
    `;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 300);
    }, 3000);
}

const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(animationStyles);
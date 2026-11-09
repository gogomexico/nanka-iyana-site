const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
const wrapper = document.querySelector('.wrapper');
const footer = document.querySelector('.footer');

// MENUボタン開閉
menuBtn.addEventListener('click', () => {
  console.log("ボタンおされた");

  navMenu.classList.toggle('is-open');
  wrapper.classList.toggle('menu-open');
  footer.classList.toggle('menu-open');

  const isOpen = navMenu.classList.contains('is-open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});


// 右クリック禁止
document.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // デフォルトの右クリックメニューを無効化
    alert('【悲報】右クリック禁止！(´・ω・｀)');
});

// コピー（Ctrl+C やドラッグコピー）の禁止
document.addEventListener('copy', (e) => {
    e.preventDefault(); // コピー処理をキャンセル
    alert('【断罪】コンテンツのコピーは禁止です(´・ω・｀)');
});

// キーボードショートカット（Ctrl+C / Cmd+C / Ctrl+Uなど）のピンポイント妨害
document.addEventListener('keydown', (e) => {
    // Ctrl+C または Cmd+C
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        e.preventDefault();
        alert('【憤怒】コピー禁止(´・ω・｀)');
    }
    // Ctrl+U (ソースコード表示) の妨害
    if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault();
        alert('【貫徹】権限がありません。(´・ω・｀)');
    }
});

// クッキー
const banner = document.getElementById('cookie-banner');
const modal = document.getElementById('cookie-modal');
const btnAcceptAll = document.getElementById('btn-accept-all');
const btnOpenSettings = document.getElementById('btn-open-settings');
const btnSaveSettings = document.getElementById('btn-save-settings');

// 「同意する」
btnAcceptAll.addEventListener('click', () => {
    banner.style.display = 'none';
    localStorage.setItem('cookie_accepted', 'all');
});

// 「設定を確認する」 -> モーダル表示
btnOpenSettings.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

// 設定モーダルの「保存する」ボタン（何をどう弄っても結局全部受け入れられるか、エラーになる）
btnSaveSettings.addEventListener('click', () => {
    // alert('設定を保存しました');
    modal.classList.add('hidden');
    banner.style.display = 'none';
    localStorage.setItem('cookie_accepted', 'custom');
});

// メンヘラタブ検知仕様
// document.addEventListener('DOMContentLoaded', () => {
//     const overlay = document.getElementById('creepy-overlay');
//     const originalTitle = document.title;

//     if (!overlay) return;

//     let isClosing = false;

//     // タブ非表示の検知
//     document.addEventListener('visibilitychange', () => {
//         if (isClosing) return;
        
//         if (document.hidden) {
//             document.title = "【警告】どこにも行かないで";
//             overlay.classList.remove('hidden');
//         } else {
//             document.title = "おかえりなさい";
//         }
//     });

//     // ウィンドウのフォーカス外れ検知
//     window.addEventListener('blur', () => {
//         if (isClosing) return;
//         overlay.classList.remove('hidden');
//     });

//     // ★ オーバーレイ全体（ボタン・背景含む）のどこをクリックしても反応する
//     overlay.addEventListener('click', () => {
//         if (isClosing) return;
//         isClosing = true;

//         alert('おかえり(・∀・)');
        
//         overlay.classList.add('hidden');
//         document.title = originalTitle;

//         setTimeout(() => {
//             isClosing = false;
//         }, 500);
//     });
// });

// 優先表示ボタン
document.addEventListener('DOMContentLoaded', () => {
    const buttonHTML = `
        <button class="btn-outline dotgothic16-regular">
            <a class="preferred-source-badge" href="https://www.google.com/preferences/source?q=news.ntv.co.jp" target="_blank" rel="noopener noreferrer nofollow">
                このサイトを優先的に表示させる
            </a>
        </button>
    `;

    // 画面内のすべての .preferred-badge-container を取得して一括セット
    const containers = document.querySelectorAll('.preferred-badge-container');
    containers.forEach(container => {
        container.innerHTML = buttonHTML;
    });
});
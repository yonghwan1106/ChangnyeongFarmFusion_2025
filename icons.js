// 창녕 양파 테마 맞춤형 아이콘 세트
const onionIcons = {
    // 양파 관련 아이콘
    onion: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <circle cx="12" cy="10" r="6"></circle>
        <path d="M12 16v2"></path>
        <path d="M8.5 7.5C9.5 6.5 11 6 12 6c1 0 2.5.5 3.5 1.5"></path>
        <path d="M8 9a4 4 0 0 0 8 0"></path>
    </svg>`,
    
    onionFarm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <circle cx="12" cy="14" r="4"></circle>
        <path d="M12 18v2"></path>
        <path d="M10 12.5C10.5 12 11 12 12 12s1.5 0 2 .5"></path>
    </svg>`,
    
    onionBulb: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <path d="M12 2v2"></path>
        <path d="M12 4C7 4 3 8 3 13c0 3.3 2.7 6 6 6h6c3.3 0 6-2.7 6-6 0-5-4-9-9-9z"></path>
        <path d="M9 13c1 1 2 1 3 1s2 0 3-1"></path>
        <path d="M9 9a3 3 0 0 1 6 0"></path>
    </svg>`,
    
    // 농업 아이콘
    farm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9,22 9,12 15,12 15,22"></polyline>
        <path d="M21 10H3"></path>
    </svg>`,
    
    tractor: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <circle cx="7" cy="18" r="3"></circle>
        <circle cx="17" cy="18" r="3"></circle>
        <path d="M4 14h12v4"></path>
        <path d="M10 14V8h6l2 6"></path>
        <path d="M6 14v-3a3 3 0 0 1 3-3h0"></path>
    </svg>`,
    
    seed: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <path d="M12 10c0-4.4-3.6-8-8-8 0 4.4 3.6 8 8 8z"></path>
        <path d="M12 10c0 4.4 3.6 8 8 8 0-4.4-3.6-8-8-8z"></path>
        <path d="M12 10c-4.4 0-8 3.6-8 8 4.4 0 8-3.6 8-8z"></path>
        <path d="M12 10c4.4 0 8-3.6 8-8-4.4 0-8 3.6-8 8z"></path>
    </svg>`,
    
    // 가공 아이콘
    processing: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        <path d="M8 3.13a4 4 0 0 0 0 7.75"></path>
    </svg>`,
    
    factory: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <path d="M2 22h20"></path>
        <path d="M7 22V7l5-5 5 5v15"></path>
        <path d="M2 14h5"></path>
        <path d="M22 14h-5"></path>
        <path d="M7 11h10"></path>
        <path d="M7 16h10"></path>
    </svg>`,
    
    packaging: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>`,
    
    // 관광 아이콘
    tourism: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
    </svg>`,
    
    experience: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        <circle cx="10" cy="10" r="3"></circle>
        <path d="M15 10h2"></path>
        <path d="M15 14h2"></path>
        <path d="M15 6h2"></path>
    </svg>`,
    
    restaurant: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <path d="M8 3v7c0 1.1-.9 2-2 2s-2-.9-2-2V3"></path>
        <path d="M12 21h8V7h-3v2h-2V7h-3v14z"></path>
        <path d="M8 3v18h4"></path>
    </svg>`,
    
    // 비즈니스 아이콘
    business: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>`,
    
    money: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <polyline points="8 12 12 16 16 12"></polyline>
    </svg>`,
    
    growth: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
    </svg>`,
    
    // 기타 아이콘
    community: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>`,
    
    innovation: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
    </svg>`,
    
    sustainability: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="custom-icon">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
        <path d="M12 5v7"></path>
    </svg>`
};

// 아이콘 초기화 함수
function initIcons() {
    document.querySelectorAll('[data-icon]').forEach(el => {
        const iconName = el.getAttribute('data-icon');
        if (onionIcons[iconName]) {
            el.innerHTML = onionIcons[iconName];
            
            // 색상 처리
            const colorAttr = el.getAttribute('data-icon-color');
            if (colorAttr) {
                el.querySelector('svg').style.color = colorAttr;
            }
            
            // 크기 처리
            const sizeAttr = el.getAttribute('data-icon-size');
            if (sizeAttr) {
                el.querySelector('svg').style.width = sizeAttr;
                el.querySelector('svg').style.height = sizeAttr;
            }
        }
    });
}

// DOM이 로드된 후 아이콘 초기화
document.addEventListener('DOMContentLoaded', initIcons);

// 모바일 메뉴 토글
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // 스크롤 이벤트 - 헤더 스타일 변경
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }
    
    // 애니메이션 요소 처리
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-up');
    
    // 현황 및 문제점 페이지의 차트 초기화
    initCurrentSituationCharts();
    
    // 슬라이더 기능 초기화
    initSliders();
    
    // 6차산업 카드 애니메이션 적용
    const sixthIndustryCards = document.querySelectorAll('.sixth-industry-card');
    if (sixthIndustryCards.length > 0) {
        sixthIndustryCards.forEach((card, index) => {
            // 초기 상태 설정
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            // 시차를 두고 등장 애니메이션 적용
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                
                // 등장 후 잠시 후에 강조 애니메이션 추가
                setTimeout(() => {
                    card.classList.add('pulse');
                    
                    // 강조 애니메이션 종료 후 제거
                    setTimeout(() => {
                        card.classList.remove('pulse');
                    }, 1000);
                }, 500);
            }, 300 * index);
        });
    }
    
    // 화면에 요소가 보이면 애니메이션 적용
    function checkVisibility() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                
                // 요소 내의 애니메이션 요소 처리
                element.querySelectorAll('.progress-bar').forEach(bar => {
                    if (!bar.classList.contains('animated')) {
                        setTimeout(() => {
                            bar.classList.add('animated');
                        }, 300);
                    }
                });
                
                // 숫자 카운팅 애니메이션
                element.querySelectorAll('.count-up-value').forEach(countEl => {
                    if (!countEl.classList.contains('counted')) {
                        animateCountUp(countEl);
                    }
                });
                
                // 대시보드 카운터 애니메이션
                element.querySelectorAll('.counter-number').forEach(countEl => {
                    if (!countEl.classList.contains('counted')) {
                        const target = parseInt(countEl.getAttribute('data-target'), 10);
                        animateCountUp(countEl, target);
                    }
                });
                
                // 순차적 등장 애니메이션
                const staggeredElements = element.querySelectorAll('.staggered-item');
                staggeredElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, 150 * index);
                });
            }
        });
    }
    
    // 숫자 카운팅 애니메이션
    function animateCountUp(element, targetValue) {
        const target = targetValue || parseInt(element.getAttribute('data-target'), 10);
        const duration = parseInt(element.getAttribute('data-duration') || '2000', 10);
        const startTime = performance.now();
        
        if (isNaN(target)) return;
        
        element.classList.add('counted');
        
        function updateCount(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentCount = Math.floor(progress * target);
            
            element.textContent = currentCount.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                element.textContent = target.toLocaleString();
            }
        }
        
        requestAnimationFrame(updateCount);
    }
    
    // 슬라이더 초기화 함수
    function initSliders() {
        // 프로젝트 전후 비교 슬라이더 
        const incomeSlider = document.getElementById('income-slider');
        const touristsSlider = document.getElementById('tourists-slider');
        const jobsSlider = document.getElementById('jobs-slider');
        
        function updateSlider(slider, valueBefore, valueAfter, fillElement) {
            if (!slider) return;
            
            const range = document.querySelectorAll(`.slider-container:has(#${slider.id}) .slider-fill`)[0];
            if (!range) return;
            
            slider.addEventListener('input', function() {
                const value = this.value;
                range.style.width = `${value}%`;
                
                // 텍스트 업데이트
                const beforeEl = document.getElementById(`${valueBefore}`);
                const afterEl = document.getElementById(`${valueAfter}`);
                
                if (beforeEl && afterEl) {
                    const beforeValue = parseInt(beforeEl.getAttribute('data-before'), 10);
                    const afterValue = parseInt(afterEl.getAttribute('data-after'), 10);
                    
                    if (!isNaN(beforeValue) && !isNaN(afterValue)) {
                        const diffValue = afterValue - beforeValue;
                        const currentValue = beforeValue + (diffValue * (value / 100));
                        
                        // 천 단위 구분자 추가하여 표시
                        beforeEl.textContent = beforeValue.toLocaleString();
                        afterEl.textContent = Math.round(currentValue).toLocaleString();
                    }
                }
            });
            
            // 자동 애니메이션 시작
            setTimeout(() => {
                let currentValue = 0;
                const interval = setInterval(() => {
                    currentValue += 1;
                    slider.value = currentValue;
                    range.style.width = `${currentValue}%`;
                    
                    // 이벤트 강제 발생
                    const event = new Event('input');
                    slider.dispatchEvent(event);
                    
                    if (currentValue >= 100) {
                        clearInterval(interval);
                    }
                }, 30);
            }, 1000);
        }
        
        // 슬라이더 초기화
        if (incomeSlider) {
            const incomeBefore = document.getElementById('income-before');
            const incomeAfter = document.getElementById('income-after');
            
            if (incomeBefore && incomeAfter) {
                incomeBefore.setAttribute('data-before', '250');
                incomeAfter.setAttribute('data-after', '380');
                updateSlider(incomeSlider, 'income-before', 'income-after');
            }
        }
        
        if (touristsSlider) {
            const touristsBefore = document.getElementById('tourists-before');
            const touristsAfter = document.getElementById('tourists-after');
            
            if (touristsBefore && touristsAfter) {
                touristsBefore.setAttribute('data-before', '80000');
                touristsAfter.setAttribute('data-after', '185000');
                updateSlider(touristsSlider, 'tourists-before', 'tourists-after');
            }
        }
        
        if (jobsSlider) {
            const jobsBefore = document.getElementById('jobs-before');
            const jobsAfter = document.getElementById('jobs-after');
            
            if (jobsBefore && jobsAfter) {
                jobsBefore.setAttribute('data-before', '1200');
                jobsAfter.setAttribute('data-after', '1400');
                updateSlider(jobsSlider, 'jobs-before', 'jobs-after');
            }
        }
    }
    
    // 스크롤 프로그레스 바 업데이트
    function updateScrollProgress() {
        const scrollProgress = document.getElementById('scroll-progress');
        if (scrollProgress) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            scrollProgress.style.width = scrolled + "%";
        }
        
        // 현재 섹션 하이라이트
        updateSectionHighlight();
    }
    
    // 현재 섹션 하이라이트
    function updateSectionHighlight() {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-item');
        
        if (sections.length === 0 || navItems.length === 0) return;
        
        let currentSection = null;
        const scrollPosition = window.scrollY + 300; // 약간의 오프셋 추가
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });
        
        if (currentSection) {
            navItems.forEach(item => {
                if (item.getAttribute('href') === `#${currentSection}`) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    }
    
    // 초기 로드 시 체크
    checkVisibility();
    updateScrollProgress(); // 프로그레스 바 초기 설정
    
    // 스크롤 시 체크
    window.addEventListener('scroll', function() {
        checkVisibility();
        updateScrollProgress();
    });
});

// 데이터 시각화 페이지 함수
function initCharts() {
    // 페이지가 시각화 페이지인지 확인
    if (!document.getElementById('visualization-page')) return;
    
    // 양파 생산량 추이 차트
    const productionChart = document.getElementById('production-chart');
    if (productionChart) {
        new Chart(productionChart, {
            type: 'line',
            data: {
                labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
                datasets: [{
                    label: '양파 생산량 (천톤)',
                    data: [145, 142, 150, 155, 160, 165, 172, 180, 190, 200, 210],
                    borderColor: '#6D28D9',
                    backgroundColor: 'rgba(109, 40, 217, 0.1)',
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: '창녕군 양파 생산량 추이 및 예측 (2020-2030)'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    },
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: '생산량 (천톤)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: '연도'
                        }
                    }
                }
            }
        });
    }
    
    // 6차산업 성장 예측 차트
    const growthChart = document.getElementById('growth-chart');
    if (growthChart) {
        new Chart(growthChart, {
            type: 'bar',
            data: {
                labels: ['현재', '1년차', '2년차', '3년차', '4년차', '5년차'],
                datasets: [
                    {
                        label: '1차 산업 (생산)',
                        data: [100, 105, 110, 115, 120, 125],
                        backgroundColor: 'rgba(16, 185, 129, 0.7)',
                    },
                    {
                        label: '2차 산업 (가공)',
                        data: [30, 50, 70, 90, 110, 130],
                        backgroundColor: 'rgba(109, 40, 217, 0.7)',
                    },
                    {
                        label: '3차 산업 (서비스)',
                        data: [20, 40, 70, 100, 140, 180],
                        backgroundColor: 'rgba(251, 191, 36, 0.7)',
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: '창녕 양파 6차산업 성장 예측 (상대 비율)'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    },
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '성장률 (기준=100)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: '프로젝트 진행 년차'
                        }
                    }
                }
            }
        });
    }
    
    // 방문객 예측 차트
    const visitorChart = document.getElementById('visitor-chart');
    if (visitorChart) {
        new Chart(visitorChart, {
            type: 'line',
            data: {
                labels: ['현재', '1년차', '2년차', '3년차', '4년차', '5년차'],
                datasets: [
                    {
                        label: '양파밸리 체험 방문객',
                        data: [5000, 20000, 40000, 60000, 80000, 100000],
                        borderColor: '#6D28D9',
                        backgroundColor: 'rgba(109, 40, 217, 0.1)',
                        tension: 0.3,
                        fill: true
                    },
                    {
                        label: '기존 관광지 방문객',
                        data: [80000, 85000, 90000, 95000, 100000, 105000],
                        borderColor: '#10B981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        tension: 0.3,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: '창녕군 관광객 예측 (2025-2030)'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    },
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '방문객 수 (명)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: '프로젝트 진행 년차'
                        }
                    }
                }
            }
        });
    }
    
    // 인구 변화 시뮬레이션 차트
    const populationChart = document.getElementById('population-chart');
    if (populationChart) {
        new Chart(populationChart, {
            type: 'line',
            data: {
                labels: ['2024', '2025', '2026', '2027', '2028', '2029', '2030'],
                datasets: [
                    {
                        label: '프로젝트 시행 시 인구',
                        data: [60000, 60300, 60900, 61800, 63000, 64500, 66000],
                        borderColor: '#6D28D9',
                        backgroundColor: 'rgba(109, 40, 217, 0.1)',
                        tension: 0.3,
                        fill: true
                    },
                    {
                        label: '현 추세 유지 시 인구',
                        data: [60000, 59500, 59000, 58500, 58000, 57500, 57000],
                        borderColor: '#EF4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        tension: 0.3,
                        fill: true,
                        borderDash: [5, 5]
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: '창녕군 인구 변화 시뮬레이션 (2024-2030)'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    },
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: '인구 수 (명)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: '연도'
                        }
                    }
                }
            }
        });
    }
}

// 데이터 시각화 필터 처리
function setupFilters() {
    // 페이지가 시각화 페이지인지 확인
    if (!document.getElementById('visualization-page')) return;
    
    const yearFilter = document.getElementById('year-filter');
    const categoryFilter = document.getElementById('category-filter');
    
    if (yearFilter) {
        yearFilter.addEventListener('change', function() {
            // 실제 구현에서는 AJAX 요청 또는 데이터 재처리 필요
            console.log('Year filter changed:', this.value);
            // updateCharts(this.value, categoryFilter ? categoryFilter.value : null);
        });
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            // 실제 구현에서는 AJAX 요청 또는 데이터 재처리 필요
            console.log('Category filter changed:', this.value);
            // updateCharts(yearFilter ? yearFilter.value : null, this.value);
        });
    }
}

// 현황 및 문제점 페이지의 차트 초기화 함수
function initCurrentSituationCharts() {
    // 양파 가격 변동 차트
    const onionPriceChart = document.getElementById('onion-price-chart');
    if (onionPriceChart) {
        new Chart(onionPriceChart, {
            type: 'line',
            data: {
                labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                datasets: [
                    {
                        label: '2023년 양파 가격(원/kg)',
                        data: [1800, 1850, 1900, 1870, 1700, 1500, 1650, 1700, 1750, 1800, 1900, 2000],
                        borderColor: '#6D28D9',
                        backgroundColor: 'rgba(109, 40, 217, 0.1)',
                        borderWidth: 2,
                        tension: 0.3,
                        fill: false
                    },
                    {
                        label: '2024년 양파 가격(원/kg)',
                        data: [2050, 2100, 2000, 1950, 1800, 1600, 1700, 1800, 1900, 2000, 2100, 2200],
                        borderColor: '#EF4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        borderWidth: 2,
                        tension: 0.3,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    },
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: '월별 양파 가격 변동 추이'
                    }
                },
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: '가격 (원/kg)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: '월'
                        }
                    }
                }
            }
        });
    }
    
    // 지역별 양파 생산량 비교 차트
    const regionComparisonChart = document.getElementById('region-comparison-chart');
    if (regionComparisonChart) {
        new Chart(regionComparisonChart, {
            type: 'bar',
            data: {
                labels: ['창녕군', '무안군', '합천군', '함평군', '고흥군', '해남군'],
                datasets: [
                    {
                        label: '양파 생산량 (천톤)',
                        data: [162, 189, 103, 98, 115, 176],
                        backgroundColor: [
                            'rgba(109, 40, 217, 0.7)',  // 창녕군 (진한 보라색)
                            'rgba(209, 213, 219, 0.7)', // 그 외 지역들 (회색)
                            'rgba(209, 213, 219, 0.7)',
                            'rgba(209, 213, 219, 0.7)',
                            'rgba(209, 213, 219, 0.7)',
                            'rgba(209, 213, 219, 0.7)'
                        ],
                        borderColor: [
                            'rgb(109, 40, 217)',
                            'rgb(156, 163, 175)',
                            'rgb(156, 163, 175)',
                            'rgb(156, 163, 175)',
                            'rgb(156, 163, 175)',
                            'rgb(156, 163, 175)'
                        ],
                        borderWidth: 1
                    },
                    {
                        label: '6차산업 인증 경영체 수',
                        data: [15, 23, 8, 7, 10, 19],
                        backgroundColor: [
                            'rgba(236, 72, 153, 0.7)',  // 창녕군 (진한 핑크색)
                            'rgba(209, 213, 219, 0.7)', // 그 외 지역들 (회색)
                            'rgba(209, 213, 219, 0.7)',
                            'rgba(209, 213, 219, 0.7)',
                            'rgba(209, 213, 219, 0.7)',
                            'rgba(209, 213, 219, 0.7)'
                        ],
                        borderColor: [
                            'rgb(236, 72, 153)',
                            'rgb(156, 163, 175)',
                            'rgb(156, 163, 175)',
                            'rgb(156, 163, 175)',
                            'rgb(156, 163, 175)',
                            'rgb(156, 163, 175)'
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: '주요 양파 생산지역 비교 (2024년)'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // 차트 초기화
    initCharts();
    
    // 필터 설정
    setupFilters();
    
    // 모바일 메뉴 토글
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// PDF 다운로드 기능
function downloadPDF() {
    // 실제 구현에서는 PDF 다운로드 로직 추가
    alert('PDF가 다운로드됩니다.');
}

// 인쇄 기능
function printPage() {
    window.print();
}

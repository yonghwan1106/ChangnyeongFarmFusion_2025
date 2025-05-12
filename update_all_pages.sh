#!/bin/bash

# 모든 HTML 파일 목록
HTML_FILES=("current-situation.html" "improvement-plan.html" "expected-effects.html" "changnyeong-trend-visualization.html")

# 1. icons.js 스크립트 추가
for file in "${HTML_FILES[@]}"; do
  # head 태그 내에 스크립트 링크 추가
  sed -i 's/<script src="https:\/\/cdn.jsdelivr.net\/npm\/chart.js"><\/script>/<script src="https:\/\/cdn.jsdelivr.net\/npm\/chart.js"><\/script>\n    <script src="icons.js"><\/script>/' "$file"
done

# 2. 스크롤 프로그레스 바 추가
for file in "${HTML_FILES[@]}"; do
  # body 시작 태그 뒤에 프로그레스 바 추가
  sed -i 's/<body class="font-sans bg-gray-50">/<body class="font-sans bg-gray-50">\n    <!-- 스크롤 프로그레스 바 -->\n    <div class="scroll-progress" id="scroll-progress"><\/div>/' "$file"
done

# 3. 배경 패턴 적용
sed -i 's/<body class="font-sans bg-gray-50">/<body class="font-sans bg-pattern-onion">/' "current-situation.html"
sed -i 's/<body class="font-sans bg-gray-50">/<body class="font-sans bg-pattern-farm">/' "improvement-plan.html"
sed -i 's/<body class="font-sans bg-gray-50">/<body class="font-sans bg-pattern-processing">/' "expected-effects.html"
sed -i 's/<body class="font-sans bg-gray-50">/<body class="font-sans bg-pattern-tourism">/' "changnyeong-trend-visualization.html"

echo "모든 HTML 파일이 업데이트되었습니다."

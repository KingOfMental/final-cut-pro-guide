# Final Cut Pro 편집과 왕복 작업 사전

[학습자료 열기](https://kingofmental.github.io/final-cut-pro-guide/)

기본 편집 경험이 있는 제작자를 위한 한국어 HTML 학습자료입니다. **8부·77항목**, 직접 만든 원리 도식, 6가지 조작 실험, 문제별 색인, 검색, 용어·단축키, 브라우저에 저장되는 읽음 표시와 왕복 체크리스트를 제공합니다.

1. 작업 설계와 소재 관리
2. 자석 타임라인과 정밀 편집
3. 음악·사운드·시간
4. 화면·합성·재사용
5. 화면 전환과 시네마틱 연결: 마스크 와이프, 가림, 통로, 매치, 휘프, 줌, 소리, 촬영 준비
6. 색관리·출력·문제 해결
7. 부록: 크리에이터 연구, 인트로·아웃트로·편집 흐름, 15초 씬 실습
8. Final Cut × Resolve 왕복 워크플로우: 15항목, XML·conform·handles·반환·수정 관리

## 기준과 범위

2026-10-10 확인한 Apple Final Cut Pro 12.4 릴리스 노트와 공식 가이드를 사용합니다. Resolve 왕복 원리는 Blackmagic 공식 Colorist Guide 20을 참고하되, 설치 버전·운영체제·코덱·XML 호환은 실제 짧은 프로젝트로 검수하도록 안내합니다.

두 앱 사이의 타임라인·색 노드가 기본 기능으로 실시간 동기화된다고 설명하지 않습니다. XML·새 렌더·검수·교체로 작업을 갱신합니다. 실제 사용자 앱에서 수행한 왕복 결과를 주장하지 않습니다.

크리에이터 관련 자료는 공식 공개 목차에서 확인한 주제와 독자적으로 만든 응용안을 구분합니다. 영상 프레임·유료 강의·프리셋은 포함하지 않습니다. 최근 스타일 부록은 유행 빈도를 측정한 순위가 아닙니다. 그림은 직접 만든 교육용 도식이며 실제 앱 스크린샷이 아닙니다.

## 수정과 빌드

- `content/book.json`: 원고
- `tools/build.py`: HTML 생성
- `docs/assets/figures.js`: 도식과 계산 실험
- `docs/assets/app.js`: 검색·이동·로컬 학습 상태
- `docs/assets/site.css`: 반응형 스타일

```sh
python3 tools/build.py
python3 -m http.server 8000 --directory docs
```

본문 수정 후 생성된 `docs/index.html`도 함께 커밋합니다. `main`에 배포 파일을 반영하면 GitHub Actions가 `docs`를 Pages로 배포합니다. 저장소 **Settings → Pages → Source: GitHub Actions** 설정이 필요합니다.

PDF를 생성하거나 기존 이미지를 재생성할 필요 없이 HTML을 갱신합니다. 학습 상태는 기기·브라우저별로 보관되며 계정 동기화 기능은 없습니다.

[색보정 교재](https://kingofmental.github.io/color-grading-guide/)

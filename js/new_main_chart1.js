try {
  // 첫 번째 차트 (4px 라운드 바)
  const ctx1 = document.getElementById("weeklyChart").getContext("2d");
  new Chart(ctx1, {
    type: "bar",
    data: {
      labels: ["월", "화", "수", "목", "금", "토", "일"],
      datasets: [
        {
          label: "신청 건수",
          data: [12, 19, 3, 5, 2, 3, 7],
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: "처리 완료",
          data: [10, 15, 5, 3, 6, 4, 8],
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: {
      scales: {
        y: { beginAtZero: true },
        x: { stacked: true },
        y: { stacked: true },
      },
      interaction: { mode: "index", intersect: false },
    },
  });
} catch (e) {
  console.error("첫 번째 차트 생성 중 오류 발생:", e);
}

try {
  // 두 번째 차트 (4px 라운드 바)
  const ctx2 = document.getElementById("secondWeeklyChart").getContext("2d");
  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["월", "화", "수", "목", "금", "토", "일"],
      datasets: [
        {
          label: "할당된 작업",
          data: [8, 13, 7, 9, 5, 8, 6],
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: "완료된 작업",
          data: [6, 11, 5, 7, 4, 6, 5],
          backgroundColor: "rgba(153, 102, 255, 0.6)",
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: {
      scales: {
        y: { beginAtZero: true },
        x: { stacked: true },
        y: { stacked: true },
      },
      interaction: { mode: "index", intersect: false },
    },
  });
} catch (e) {
  console.error("두 번째 차트 생성 중 오류 발생:", e);
}

try {
  // 도넛 차트
  const ctx3 = document.getElementById("donutChart").getContext("2d");
  new Chart(ctx3, {
    type: "doughnut",
    data: {
      labels: ["PC통제", "보안USB", "방화벽신청"],
      datasets: [
        {
          data: [25, 21, 54],
          backgroundColor: [
            "rgba(255, 206, 86, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],
          borderColor: [
            "rgba(255, 206, 86, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { position: "top" } },
    },
  });
} catch (e) {
  console.error("도넛 차트 생성 중 오류 발생:", e);
}

try {
  // 이름 차트 (4px 라운드 바)
  const ctx4 = document.getElementById("namesChart").getContext("2d");
  new Chart(ctx4, {
    type: "bar",
    data: {
      labels: ["홍길동", "이순신", "강감찬", "안중근", "이성계"],
      datasets: [
        {
          label: "신청자 수",
          data: [10, 8, 7, 6, 2],
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: { scales: { y: { beginAtZero: true } } },
  });
} catch (e) {
  console.error("이름 차트 생성 중 오류 발생:", e);
}

try {
  // 부서 차트 (4px 라운드 바)
  const ctx5 = document.getElementById("departmentsChart").getContext("2d");
  new Chart(ctx5, {
    type: "bar",
    data: {
      labels: ["기획부", "영업 1팀", "영업 2팀", "2부 팀", "3부 팀"],
      datasets: [
        {
          label: "신청자 수",
          data: [50, 30, 25, 18, 17],
          backgroundColor: "rgba(255, 159, 64, 0.6)",
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: { scales: { y: { beginAtZero: true } } },
  });
} catch (e) {
  console.error("부서 차트 생성 중 오류 발생:", e);
}

try {
  // 곡선 라인 차트
  const ctx6 = document.getElementById("randomWeeklyChart").getContext("2d");
  new Chart(ctx6, {
    type: "line",
    data: {
      labels: ["월", "화", "수", "목", "금", "토", "일"],
      datasets: [
        {
          label: "PC통제",
          data: [2, 5, 3, 8, 6, 4, 7],
          borderColor: "rgba(255, 206, 86, 1)",
          backgroundColor: "rgba(255, 206, 86, 0.2)",
          borderWidth: 2,
          fill: true,
          tension: 0.4,
        },
        {
          label: "보안USB",
          data: [7, 6, 2, 5, 9, 3, 4],
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderWidth: 2,
          fill: true,
          tension: 0.4,
        },
        {
          label: "방화벽신청",
          data: [4, 3, 8, 2, 6, 7, 5],
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderWidth: 2,
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      scales: { y: { beginAtZero: true, max: 10 } },
      interaction: { mode: "index", intersect: false },
    },
  });
} catch (e) {
  console.error("곡선 라인 차트 생성 중 오류 발생:", e);
}

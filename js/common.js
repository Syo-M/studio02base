{
    const mbtiChart = document.querySelector("#mbtiChart").getContext('2d')
    new Chart(mbtiChart, {
        type: 'pie',
        data: {
            labels: ["提唱者", "主人公", "運動家", "仲介者", "冒険家", "管理者", "討論者"],
            datasets: [{
                backgroundColor: ["#59ffa1", "#47cc81", "#369961", "#246640", "#d7cf3a", "#a0d8ef", "#9d5b8b"],
                data: [10, 3, 2, 1, 1, 1, 1]
            }]
        },
        options: {
            responsive: false,
        }
    });
}
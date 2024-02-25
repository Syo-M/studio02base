{
    const mbtiChart = document.querySelector("#mbtiChart").getContext('2d')
    new Chart(mbtiChart, {
        type: 'pie',
        data: {
            labels: ["提唱者", "仲介者" ,"主人公", "討論者", "運動家" , "管理者", "冒険家","巨匠", "指揮官" , "論理学者" ],
            datasets: [{
                backgroundColor: ["#59ffa1", "#47cc81", "#369961","#D8BFD8", "#246640","#a0d8ef" ,"#d7cf3a" ,"#E9D985" , "#9d5b8b" , "#753665"],
                data: [18 , 10 , 8 , 3 , 3 , 2, 1 , 1 , 1 , 1]
            }]
        },
        options: {
            responsive: false,
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const completedScheduleTable = document.getElementById('completed-schedule-table');
    const filterDate = document.getElementById('completed-filter-date');
    const completedSchedules = JSON.parse(localStorage.getItem('completedSchedules')) || [];

    function renderCompletedSchedules(filteredSchedules) {
        completedScheduleTable.innerHTML = '';
        filteredSchedules.forEach((schedule, index) => {
            const row = document.createElement('tr');
            const date = new Date(schedule.tanggal);
            const formattedDate = date.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${formattedDate}</td>
                <td>${schedule.waktu}</td>
                <td>${schedule.agenda}</td>
                <td>${schedule.tempat}</td>
                <td>${schedule.peserta}</td>
                <td>Selesai</td>
            `;
            completedScheduleTable.appendChild(row);
        });
    }

    renderCompletedSchedules(completedSchedules);

    filterDate.addEventListener('input', function () {
        const filteredSchedules = completedSchedules.filter(schedule => schedule.tanggal === filterDate.value);
        renderCompletedSchedules(filteredSchedules);
    });
});

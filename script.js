document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-percent');
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent + '%';
    });
});

function getTrackRatingSum() {
    total = 0;
    document.querySelectorAll("[id*=rating_num_z_]").forEach(val => {
        const content = val.textContent;
        if (isNaN(content)) return;
        total += Number(content);
    });
}

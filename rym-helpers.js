function getTrackRatingSum() {
    total = 0;
    trackCount = 0;
    const trackEls = document.querySelectorAll("[id*=rating_num_z_]");
    
    trackEls.forEach(val => {
        const content = val.textContent;
        if (isNaN(content)) return;
        total += Number(content);
        trackCount++;
    });

    return (total/trackCount).toFixed(2);
}

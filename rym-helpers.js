function getTrackRatingSum() {
    total = 0;
    totalTrackCount = track_ratings?.ratings?.length;

    track_ratings?.ratings?.forEach(track => {
        total += track.rating;
    });

    return totalTrackCount > 0 ? (total / totalTrackCount).toFixed(2) : 0;
}


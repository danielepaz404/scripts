function getTrackRatingSum() {
    total = 0;
    totalTrackCount = track_ratings?.ratings?.length;

    track_ratings?.ratings?.forEach(rating => {
        total += rating.rating;
    });

    return totalTrackCount > 0 ? (total / totalTrackCount).toFixed(2) : 0;
}

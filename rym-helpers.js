function getTrackRatingSum() {
    total = 0;
    totalTrackCount = track_ratings?.ratings?.length;

    track_ratings?.ratings?.forEach(track => {
        total += track.rating;
    });

    // for some reason the value range is 0-10 instead of 0-5
    return totalTrackCount > 0 ? (total / totalTrackCount / 2).toFixed(2) : 0;
}



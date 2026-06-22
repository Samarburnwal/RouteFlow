class DistanceCalculator {

    static toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    static calculateDistance(lat1, lon1, lat2, lon2) {

        const R = 6371000;

        const phi1 = this.toRadians(lat1);
        const phi2 = this.toRadians(lat2);

        const deltaPhi = this.toRadians(lat2 - lat1);
        const deltaLambda = this.toRadians(lon2 - lon1);

        const a =
            Math.sin(deltaPhi / 2) ** 2 +
            Math.cos(phi1) *
            Math.cos(phi2) *
            Math.sin(deltaLambda / 2) ** 2;

        const c =
            2 * Math.atan2(
                Math.sqrt(a),
                Math.sqrt(1 - a)
            );

        return R * c;
    }

}

module.exports = DistanceCalculator;
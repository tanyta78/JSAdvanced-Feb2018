//recursive
function calcEccentricAnomalyRec(currentAnomaly, eccentricity) {
    let pi = Math.PI;
    let precision = 9;

    currentAnomaly = (currentAnomaly * 180) / pi;
    currentAnomaly /= 360.0;
    currentAnomaly = 2.0 * pi * (currentAnomaly - Math.floor(currentAnomaly));

    let delta = Math.pow(10, -precision);
    let e = currentAnomaly;
    let f = e - eccentricity * Math.sin(currentAnomaly) - currentAnomaly;

    return getNext(e, f, delta);

    function getNext(e, f, delta) {
        if ((Math.abs(f) < delta)) {
            return Math.round(e * Math.pow(10, precision)) / Math.pow(10, precision);
        }
        e = e - f / (1.0 - eccentricity * Math.cos(e));
        f = e - eccentricity * Math.sin(e) - currentAnomaly;

        return getNext(e, f, delta);
    }
}
//
function calcEccentricAnomalyIter(currentAnomaly, eccentricity) {
    currentAnomaly = (currentAnomaly * 180) / Math.PI;
    let anomaly = getAnomaly(eccentricity, currentAnomaly, 9);
    console.log(anomaly);

    function getAnomaly(ec, m, dp) {
        // ec = eccentricity
        // m = eccentric anomaly
        // dp = decimal points precision
        let pi = Math.PI;
        let delta = Math.pow(10, -dp);

        m /= 360.0;
        m = 2.0 * pi * (m - Math.floor(m));

        let e = m;
        let f = e - ec * Math.sin(m) - m;

        while ((Math.abs(f) > delta)) {
            e = e - f / (1.0 - ec * Math.cos(e));
            f = e - ec * Math.sin(e) - m;
        }

        return Math.round(e * Math.pow(10, dp)) / Math.pow(10, dp);
    }
}

calcEccentricAnomaly(0.25, 0.99);

console.log(calcEccentricAnomaly(0.25, 0.99));
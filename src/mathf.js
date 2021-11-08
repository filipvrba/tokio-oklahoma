class Mathf {

    static random( min, max ) {

        return Math.random() * (max - min) + min;
    }
}

export { Mathf };
class McCalc {
    constructor(lambda, miu, customer, server) {
        this.lambda = lambda;
        this.miu = miu;
        this.server = server;
        this.customer = customer;
        this.intensity = lambda / miu;
    }

    factorial = (num) => {
        let rval = 1;
        for (let i = 2; i <= num; i++)
            rval = rval * i;
        return rval;
    }

    calcP0 = () => {
        let sumA = 0;
        let sumB = 0;
        for (let n = 1; n <= this.server; n++) {
            sumA += Math.pow(this.lambda / this.miu, n) / this.factorial(n);
        }
        for (let n = this.server + 1; n <= this.customer; n++) {
            sumB = Math.pow(this.lambda / (this.server * this.miu), n - this.server)
        }
        const c = Math.pow(this.lambda / this.miu, this.server) / this.factorial(this.server);
        return 1 / (1 + sumA + c * sumB);
    }

    calcPn = (n) => {
        return (Math.pow(this.intensity, n) / this.factorial(n)) * this.calcP0();
    }

    calcL = () => {
        let sumA = 0;
        let sumB = 0;
        for (let n = 0; n < this.server - 1; n++) {
            sumA += n * this.calcPn(n);
            sumB += this.calcPn(n);
        }
        return sumA + this.calcLq() + this.server * (1 - sumB);
    }

    calcLq = () => {
        const a = (this.calcP0() * Math.pow(this.intensity, this.server) * this.intensity) / (this.factorial(this.server) * Math.pow(1 - this.intensity, 2));
        const b = (1 - Math.pow(this.intensity, this.customer - this.server)) - ((this.customer - this.server) * Math.pow(this.intensity, this.customer - this.server) * (1 - this.intensity))
        return a * b;
    }

    calcLambdaE = () => {
        const a = this.calcPn(this.customer);
        return this.lambda * (1 - a);
    }

    calcW = () => {
        const a = this.calcL();
        const b = this.calcLambdaE();
        return a / b;
    }

    calcWq = () => {
        const a = this.calcLq();
        const b = this.calcLambdaE();
        return a / b;
    }
    debug = () => {
        console.log(`L = ${this.calcL()}`);
        console.log(`Lq = ${this.calcLq()}`);
        console.log(`LambdaE = ${this.calcLambdaE()}`);
        console.log(`W = ${this.calcW()}`);
        console.log(`Wq = ${this.calcWq()}`);
        console.log(`intensity = ${this.intensity}`);
        console.log(`p0 =  ${this.calcP0()}`);

    }
}
const answer = new McCalc(2, 3, 3, 1)

answer.debug();
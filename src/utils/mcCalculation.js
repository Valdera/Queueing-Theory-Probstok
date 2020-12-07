class McCalc {
  constructor(lambda, miu, customer, server) {
    this.lambda = lambda;
    this.miu = miu;
    this.mode = 'mc';
    this.server = server;
    this.customer = customer;
    this.intensity = lambda / (miu * server);
    this.p0 = this.calcP0();
    this.l = this.calcL();
    this.lq = this.calcLq();
    this.w = this.calcW();
    this.wq = this.calcWq();
    this.lambdaE = this.calcLambdaE();
    this.getPn = this.getPn.bind(this);
  }

  getPn(n) {
    return this.calcPn(n);
  }

  factorial = (num) => {
    let rval = 1;
    for (let i = 2; i <= num; i++) rval = rval * i;
    return rval;
  };

  calcP0 = () => {
    let sumA = 0;
    for (let n = 0; n <= this.server - 1; n++) {
      sumA += Math.pow(this.lambda / this.miu, n) / this.factorial(n);
    }
    const b =
      Math.pow(this.lambda / this.miu, this.server) /
      this.factorial(this.server);
    const c =
      (1 - Math.pow(this.intensity, this.customer - this.server + 1)) /
      (1 - this.intensity);
    const d = this.customer - this.server + 1;
    if (this.intensity !== 1) {
      return Math.pow(sumA + c * b, -1);
    } else if (this.intensity === 1) {
      return Math.pow(sumA + d * b, -1);
    }
  };

  calcPn = (n) => {
    if (n === 0) {
      return this.calcP0();
    } else if (n < this.server) {
      return (
        (Math.pow(this.lambda / this.miu, n) / this.factorial(n)) *
        this.calcP0()
      );
    } else if (n >= this.server && n <= this.customer) {
      return (
        (Math.pow(this.lambda / this.miu, n) /
          (this.factorial(this.server) *
            Math.pow(this.server, n - this.server))) *
        this.calcP0()
      );
    } else if (n > this.customer) {
      return 0;
    }
  };

  calcL = () => {
    let sumA = 0;
    let sumB = 0;
    for (let n = 0; n <= this.server - 1; n++) {
      sumA += n * this.calcPn(n);
      sumB += this.calcPn(n);
    }
    return sumA + this.calcLq() + this.server * (1 - sumB);
  };

  calcLq = () => {
    const a =
      (this.calcP0() *
        Math.pow(this.lambda / this.miu, this.server) *
        this.intensity) /
      (this.factorial(this.server) * Math.pow(1 - this.intensity, 2));
    const b =
      1 -
      Math.pow(this.intensity, this.customer - this.server) -
      (this.customer - this.server) *
        Math.pow(this.intensity, this.customer - this.server) *
        (1 - this.intensity);
    return a * b;
  };

  calcLambdaE = () => {
    const a = this.calcPn(this.customer);
    return this.lambda * (1 - a);
  };

  calcW = () => {
    const a = this.calcL();
    const b = this.calcLambdaE();
    return a / b;
  };

  calcWq = () => {
    const a = this.calcLq();
    const b = this.calcLambdaE();
    return a / b;
  };
  debug = () => {
    console.log(`L = ${this.calcL()}`);
    console.log(`Lq = ${this.calcLq()}`);
    console.log(`LambdaE = ${this.calcLambdaE()}`);
    console.log(`W = ${this.calcW()}`);
    console.log(`Wq = ${this.calcWq()}`);
    console.log(`intensity = ${this.intensity}`);
    console.log(`p0 =  ${this.calcP0()}`);
    console.log(`p3 =  ${this.calcPn(3)}`);
  };
}

export default McCalc;

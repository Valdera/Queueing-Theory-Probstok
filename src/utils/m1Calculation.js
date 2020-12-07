class M1Calc {
  constructor(lambda, miu, customer) {
    this.lambda = lambda;
    this.mode = 'm1';
    this.miu = miu;
    this.customer = customer;
    this.intensity = lambda / miu;
    this.p0 = this.calcPn(0);
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

  calcPn = (n) => {
    if (n <= this.customer) {
      return (
        ((1 - this.intensity) /
          (1 - Math.pow(this.intensity, this.customer + 1))) *
        Math.pow(this.intensity, n)
      );
    } else if (n > this.customer) {
      return 0;
    }
  };

  calcL = () => {
    const a = this.intensity / (1 - this.intensity);
    const b =
      ((this.customer + 1) * Math.pow(this.intensity, this.customer + 1)) /
      (1 - Math.pow(this.intensity, this.customer + 1));
    return a - b;
  };

  calcLq = () => {
    const l = this.calcL();
    const p0 = this.calcPn(0);
    return l - (1 - p0);
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

  calcServerUltilization = () => {
    return 1 - this.calcPn(0);
  };

  debug = () => {
    console.log(`L = ${this.calcL()}`);
    console.log(`Lq = ${this.calcLq()}`);
    console.log(`LambdaE = ${this.calcLambdaE()}`);
    console.log(`W = ${this.calcW()}`);
    console.log(`Wq = ${this.calcWq()}`);
    console.log(`intensity = ${this.intensity}`);
    console.log(`p0 =  ${this.calcPn(0)}`);
    console.log(`p3 =  ${this.calcPn(3)}`);
  };
}

export default M1Calc;

class M1Calc {
  constructor(lambda, miu, customer) {
    this.lambda = lambda;
    this.miu = miu;
    this.customer = customer;
    this.intensity = lambda / miu;
  }

  calcPn = (n) => {
    return (
      ((1 - this.intensity) / (1 - Math.pow(this.intensity, this.customer + 1))) *
      Math.pow(this.intensity, n)
    );
  }

  calcL = () => {
    const a = this.intensity / (1 - this.intensity);
    const b =
      ((this.customer + 1) * Math.pow(this.intensity, this.customer + 1)) /
      (1 - Math.pow(this.intensity, this.customer + 1));
    return a - b;
  }

  calcLq = () => {
    const l = this.calcL();
    const p0 = this.calcPn(0);
    return l - (1 - p0);
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
    console.log(`intensity = ${this.intensity}`)
    console.log(`p0 =  ${this.calcPn(0)}`);
    console.log(`p3 =  ${this.calcPn(3)}`);

  }
}

const answer = new M1Calc(2, 3, 3)

answer.debug();
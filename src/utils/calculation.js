const intensity = (lambda, miu) => {
  return lambda / miu;
};

const mm1nCalcPn = (intensity, customer, n) => {
  return (
    ((1 - intensity) / (1 - Math.pow(intensity, customer + 1))) *
    Math.pow(intensity, n)
  );
};

const mm1nCalcL = (intensity, customer) => {
  const a = intensity / (1 - intensity);
  const b =
    ((customer + 1) * Math.pow(intensity, customer + 1)) /
    (1 - Math.pow(intensity, customer + 1));
  return a - b;
};

const mm1nCalcLq = (intensity, customer, n) => {
  const l = mm1nCalcL(intensity, customer);
  const p0 = mm1nCalcPn(intensity, customer, 0);
  return l - (1 - p0);
};

const mm1nCalcLambdae = (intensity, customer, lambda) => {
  const a = mm1nCalcPn(intensity, customer, customer);
  return lambda * (1 - a);
};

const mm1nCalcW = (intensity, customer, lambda) => {
  const a = mm1nCalcL(intensity, customer);
  const b = mm1nCalcLambdae(intensity, customer, lambda);
  return a / b;
};
const mm1nCalcWq = (intensity, customer, n, lambda) => {
  const a = mm1nCalcLq(intensity, customer, n);
  const b = mm1nCalcLambdae(intensity, customer, customer);
};

const mmcnCalcL = (p, n) => {};
const mmcnCalcLq = (arg) => {};
const mmcnCalcW = (arg) => {};
const mmcnCalcWq = (arg) => {};

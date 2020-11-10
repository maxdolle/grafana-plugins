class RollingBuffer {
  data: number[];
  size: number;

  constructor(size: number) {
    this.size = size;
    this.data = [];

    this.reset(0);
  }

  reset(value: number) {
    for (let i = 0; i < this.size; i += 1) {
      this.data[i] = value;
    }
  }

  push(newData: number[]) {
    // If new data is larger than buffer, flush buffer with new values
    if (newData.length >= this.size) {
      this.data = newData.slice(-this.size);
    } else {
      // Otherwise
      // Shift buffer to the left
      for (let i = 0; i < this.size - newData.length; i += 1) {
        this.data[i] = this.data[i + newData.length];
      }

      // Add new data points at the end
      for (let i = 0; i < newData.length; i += 1) {
        this.data[i + this.size - newData.length] = newData[i];
      }
    }
  }

  getData() {
    return this.data;
  }

  mean() {
    return this.sum() / this.data.length;
  }

  sum() {
    return this.data.reduce((a, b) => a + b, 0);
  }
}

export default RollingBuffer;

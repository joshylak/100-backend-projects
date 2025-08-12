export class Stats {
  constructor() {
    this.successCount = 0;
    this.errorCount = 0;
    this.times = [];
  }

  addSuccess(time) {
    this.successCount++;
    this.times.push(time);
  }

  addError() {
    this.errorCount++;
  }

  report(totalRequests) {
    const avgTime = this.times.length
      ? (this.times.reduce((a, b) => a + b, 0) / this.times.length).toFixed(2)
      : 0;

    return {
      totalRequests,
      success: this.successCount,
      errors: this.errorCount,
      averageResponseTime: `${avgTime} ms`,
      successRate: `${((this.successCount / totalRequests) * 100).toFixed(2)}%`
    };
  }
}

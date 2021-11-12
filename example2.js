function Auto() {
	this.velocidad = 0
	this.acelerar = (num) => {
		this.velocidad += num
	}
	this.frenar = (num) => {
		this.velocidad -= num
		if (this.velocidad < 0) {
			this.velocidad = 0
		}
	}
}

const a1 = new Auto()

console.log(a1.velocidad);

a1.acelerar(1)
a1.acelerar(2)
console.log(a1.velocidad);

a1.frenar(2)
console.log(a1.velocidad);

a1.frenar(3)
console.log(a1.velocidad);
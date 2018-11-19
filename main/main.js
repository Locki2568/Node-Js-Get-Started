// Write your cade below:
function caclRemaindar(in1,in2) {
	return in1%in2;
};

function caclSum(array) {
	var sum = array.reduce(getSum, 0);
	return sum;
};

function getSum(total, num){
	return total + num;
};

function caclSumInConditon(array, num) {
	var result = 0;
	for(var i=0; i<array.length; i++){
		if(array[i] < num){
			result += array[i];
		}
	}
	return result;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}
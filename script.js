var celsius;
var fahrenheit;
var result = '<h3>';

// prompt window to enter celsius
celsius = window.prompt('請輸入攝氏溫度(將四捨五入制小數點第二位)');

// 判斷是否有輸入值
if (celsius != null && !isAllSpaces(celsius)) {
	// 判斷是否為純數字
	if (isNaN(celsius)) {
		result += '輸入值非純數字</h3>';
	} else {
		// 轉為浮點數 四捨五入制小數點第二位
		celsius = parseFloat(celsius).toFixed(2);
		// 轉為華氏
		fahrenheit = celsiusToFahrenheit(celsius).toFixed(2);
		// 組織結果文字
		result += '所輸入的攝氏溫度: ' + celsius.toString() + '°C<br>所輸入的華氏溫度: ' + fahrenheit.toString() + '°F</h3>';
	}
} else {
	result += '未輸入欲轉換的攝氏溫度</h3>';
}

// 寫到網頁
document.writeln(result);

// 攝氏轉華氏
function celsiusToFahrenheit(celsius) {
	return celsius * (9 / 5) + 32;
}

// 判斷字串是否為全空白字串
function isAllSpaces(input){
	// 去除所有空白
	var removedAllSpaces = input.replace(/\s+/g,"");

	// 假如沒有長度了便是全空白字串
	if (removedAllSpaces.length == '' || removedAllSpaces.length == undefined) {
		return true;
	} else {
		return false;
	}
}
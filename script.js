var palindrom = function(n) {
	var b = String(n);
		resPal = 0;

		for (var i = 10; i < n; i++) {
			if (i % 2 == 0 || i % 5 == 0 || i % 3 == 0 || i % 7 == 0 || i % 9 == 0) {
				continue;
			}else{
				var pal = String(i);
					a = String(i).split("").reverse().join("");
					if (a == pal) {
						resPal = a;
						if (resPal < n) {
							continue;
						}
					}
			}
	}
	return Number(resPal);
};
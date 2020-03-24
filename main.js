const budget_total = parseFloat($(".total_budget span").text());
// gets the 1000 or whatever the value is in the span, pasrse float supports decimals - stores the variable before the javascript

$("body").on("keyup keydown keypress change",
	".department input",
	function (e) {
		let running_total = budget_total;
		// starting point - running total will equal 1000
		$(".department input").each(function () {
			let user_input = $(this).val();
			// each loop is running so this goes through each and it becomes "this" and gets the value
			if (user_input !== "") {
				user_input = parseFloat(user_input);
				// This says, if the user enters nothing, return "false" and also, user_input should still show if decimal

				running_total = running_total - user_input;
			}
		});

		if (running_total <= 20 && running_total >= 0) {
			$(".total_budget").addClass("warning").removeClass("error");
		} else if (running_total < 0) {
			$(".total_budget").addClass("error").removeClass("warning");
		} else {
			$(".total_budget").removeClass("error warning");
		}
		// when to make things red and yellow with css classes, amd resetting every time 

		$(".total_budget span").text(running_total);
	});
// . selects a class, space goes inside to find the children - don't need department right now, but could potentially add more later
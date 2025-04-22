$("#messageState").on("change", (x) => {
    $(".message").removeClass("openNor").removeClass("closeNor");
    if ($("#messageState").is(":checked")) {
        // --- Message Opening ---
        $(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
        $(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
        $(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
        console.log("Abrindo");

        // Hide button immediately when opening starts
        $("#nextBtn").hide();

        // **NEW:** Use setTimeout to show the button after the animation duration (2s) + small buffer
        setTimeout(function() {
            // Check if the checkbox is still checked (user might have clicked again quickly)
            if ($("#messageState").is(":checked")) {
                 $("#nextBtn").show(); // Show the button
                 console.log("Button shown via setTimeout");
            }
        }, 2100); // Wait 2100ms (2s animation + 100ms buffer)

    } else {
        // --- Message Closing ---
        $(".message").removeClass("no-anim").addClass("closeNor");
        $(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
        $(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
        console.log("fechando");

        // Hide button immediately when closing starts
        $("#nextBtn").hide();
    }
});

// Keep the animationend for adding/removing classes, but NOT for showing the button
$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End - Message");
	if ($(".message").hasClass("closeNor")) {
		$(".message").addClass("closed");
    }
	// We no longer show the button here, setTimeout handles it.
	$(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End - Heart");
	if (!$(".heart").hasClass("closeHer")) {
		$(".heart").addClass("openedHer").addClass("beating");
	} else {
		$(".heart").addClass("no-anim").removeClass("beating");
	}
	$(".heart").removeClass("openHer").removeClass("closeHer");
});

// --- Keep the button click handler ---
$("#nextBtn").on("click", function() {
    // **Important:** Replace 'next-page.html' with the actual name of the HTML file you want to navigate to.
    window.location.href = 'birthday-cake.html';
});
// --- End of button click handler ---
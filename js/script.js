jQuery('#frm').validate({
	rules:{
		name:"required",
		email:{
			required:true,
			email:true
		},
		password:{
			required:true,
			minlength:5
		},
		password_again: {
			equalTo: "#password"
		  },
	},messages:{
		name:"Please enter your name",
		email:{
			required:"Please enter email",
			email:"Please enter valid email",
		},
		password:{
			required:"Please enter your password",
			minlength:"Password must be 5 char long"
		},
		password_again: {
			equalTo: "Please Enter the same password"
		  },
	},
	submitHandler:function(form){
		form.submit();
	}
});


const file = document.querySelector("#file")
file.addEventListener("change", function() {
  const reader = new FileReader()
  reader.addEventListener("load", () => {
    document.querySelector("#image").src = reader.result
  })
  reader.readAsDataURL(this.files[0]);
})

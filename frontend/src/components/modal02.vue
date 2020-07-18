<template
><transition name="modal02" >
	<div class="modal-mask">
		<div class="modal-wrapper">
			<div class="modal-container" style="width:760px !important;">
				<!--<div class="modal-header">
				  <slot name="header">
					default header
				  </slot>
				</div>-->

				<div class="modal-body" style="padding-top:80px;">
					<div class="pop-c-txt">
						// <br><br>

						<p class="fc22">나이브의 생일 축하 메세지를 자유롭게 적어 주세요!</p><br>

						트위터 ID 혹은 메일주소를 입력해 주시는 분들께는<br>
						추첨을 통해 1분에게 굿즈를 보내드립니다.<br>
						응모를 원치 않으시는 분들은 ID 대신 닉네임이나 아무 이름을 적으셔도 됩니다.<br>
						ID란의 정보는 오직 추첨을 위한 것으로 노출되지 않습니다.<br><br>

						//
					</div>
					<div class="pop-txt">
						<p class="fc-red">※ 주의사항</p>
						- 전송한 메세지는 전송 당시에만 볼 수 있으며 이 후에는 확인 및 삭제가 불가능합니다.<br>
						- 한 ID당 1회 응모가 가능합니다. (중복 응모는 삼가해 주세요.)<br>
						- 메세지 내용 없이 응모 정보만이 있는 글은 무효처리 됩니다.<br>
						- 주최의 판단 하에 장난성의 무의미한 글, 혹은 해석이 불가능한 내용은 무효 처리되며<br><span style="padding-left:17px"></span>삭제될 수 있습니다. (네팔어는 가능)
					</div>
					<hr class="green-hr mt35" style="width:660px; margin:0 auto;">

				</div>

				<button class="modal-default-button" @click="$emit('close')">
					<span><img src="../assets/images/close.png" alt="닫기"></span>
				</button>
			</div>
		</div>
	</div>
</transition>
</template>
<script>
    export default {
        data() {
            return {
            };
        },
        computed : {
            test(){
            }
        },
        props: [],
    };
</script>

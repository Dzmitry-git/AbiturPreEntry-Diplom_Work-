<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- Bootstrap CSS -->
	<link 
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
		crossorigin="anonymous"
	>
	<title>ГГУ - запись</title>
	<style>
		.toast-container  {
			z-index: 100000000;
		}

		.toasts__custon {
			width: 100vw;
			height: 100vh;
		}

		.castom {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		#main-container {
			display: none;
		}

		#spinner {
			width: 100vw;
			height: 100vh;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	</style>
</head>
<body>
	<div id="spinner">
		<div class="spinner-border text-primary" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
	<div class="container my-3" id="main-container">
		<div class="row mb-5">
			<div class="col text-center">
				<h3 class="main-title display-6"></h3>
			</div>
		</div>
		<div class="row my-3">
			<div class="col-12 col-md-6 mx-auto">
				<div class="d-flex">
					<input type="date" name="date" id="inputDate" class="form-control me-4">
					<button type="button" class="btn btn-primary" id="mainBtn">Записаться</button>
				</div>
			</div>
		</div> <!-- /.row -->

		<div class="row my-auto">
			<div class="col-12 col-md-6 types__list mb-4 mx-auto">
				<ul class="list-group">
					<li class="list-group-item">
						<label>
							<input class="form-check-input me-2" type="radio" name="typeCheckbox" data-name = "дневная" data-id="1" checked>
							Дневное
						</label>
					</li>
					<li class="list-group-item">
						<label>
							<input class="form-check-input me-2" type="radio" name="typeCheckbox" data-name = "заочная" data-id="2">
							Заочное
						</label>
					</li>
				</ul>
			</div>
		</div><!-- /.row -->

		<div class="row">
			<div class="col-12 col-md-6 faculs__list mx-auto">
			</div>
		</div><!-- /.row -->
	</div><!-- /.container -->

	<div class="toast-container position-absolute top-0 end-0 p-3" id="toastPlacement"></div>

	<!-- Modal список времён и аудиторий для записи-->
	<div class="modal fade" id="timesModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="timesModal" aria-hidden="true">
		<div class="modal-dialog modal-dialog-scrollable">
			<div class="modal-content">
					<div class="modal-header">
					<h5 class="modal-title">
							<span class="left"></span>
							<span class="middle"></span>
							<span class="right"></span>
					</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
					<table class="table">
							<tbody>
									<div class="container">
											<!-- <div class="row mb-4">
													<div class="col">
															Title: 1
													</div>
											</div>
											<div class="row mb-3">
													<div class="col">
															<button class="btn btn-primary">09:00:00</button>
													</div>
											</div>
											<hr> -->
									</div>
							</tbody>
					</table>
					</div>
					<div class="modal-footer">
					</div>
			</div>
		</div>
	</div>

	<!-- Modal 2 ввод номера паспорта и номера телефона-->
	<div class="modal fade" id="inputDataModal" data-bs-backdrop="static" tabindex="-1">
		<div class="modal-dialog modal-dialog-scrollable">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Запись</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form>
						
						<!-- <label class="col-form-label">Email</label>
						<div class="form-floating">
							<input type="email" class="form-control" id="email" placeholder="Email">
							<label for="email">Email</label>
						</div>
						<div class="form-text mb-3">Для сообщения об успешной регистрации</div> -->

						<!-- <label class="col-form-label">Номер паспорта<span class="text-danger">  *</span></label> -->
						<div class="form-floating mb-3">
							<input required type="text" class="form-control" id="passport" placeholder="Номер паспорта">
							<label for="passport">
								Номер паспорта
								<span class="text-danger">  *</span>
							</label>
						</div>

						<!-- <label class="col-form-label">Телефон<span class="text-danger">  *</span></label> -->
						<div class="form-floating">
							<input required type="text" class="form-control" id="phone" placeholder="Телефон">
							<label for="phone">
								Телефон
								<span class="text-danger">  *</span>
							</label>
						</div>
						<div class="form-text mb-4">Будет отправленно сообщение с кодом подтверждения</div>

<!-- 						<label class="col-form-label">Email</label> -->
						<div class="form-floating">
							<input type="email" class="form-control" id="email" placeholder="Email">
							<label for="email">Email</label>
						</div>
						<div class="form-text mb-3">Будет отправлено письмо со сведениями о регистрации</div>

					</form>
					<div class="form-text">
						<span class="text-danger">*</span> - обязательные поля
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Назад</button>
					<!-- <button type="button" class="btn btn-primary">Записаться</button> -->
					<button id="sendSmsBtn" type="button" class="btn btn-primary">Записаться</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal 3 Подтверждение кода СМС-->
	<div class="modal fade" id="smsConfirmModal" data-bs-backdrop="static">
		<div class="modal-dialog modal-dialog-scrollable">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Подтверждение кода</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<table class="table">
						<tbody>
							<form>
								<div class="mb-3">
									<label for="phone_kod" class="col-form-label">Введите полученный код:</label>
									<input type="text" class="form-control" id="codeInput">
								</div>
							</form>
						</tbody>
					</table>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Назад</button>
					<button id="smsConfirmBtn" type="button" class="btn btn-primary">Подтвердить</button>
				</div>
			</div>
		</div>
	</div>

	<!-- ModalSuccess -->
	<div class="modal fade" id="modalSuccess" tabindex="-1" role="dialog" data-bs-backdrop="static">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Статус записи</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="alert alert-success" role="alert">
					</div>
				</div>
				<div class="modal-footer">
					<button id="button_success" type="button" class="btn btn-primary">Ок</button>
				</div>
			</div>
		</div>
	</div>

		
</body>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

<script src="https://unpkg.com/imask"></script>
<script src="main.js"></script>

</html>
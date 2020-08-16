<template>
<main class="two-column">
		<div class="layout-center clearfix airSticky_stop-block">



			<div id="main-content" class="no-sidebar right-sidebar clearfix order-page">
				<!-- <h1>Товары</h1> -->

				<!-- блок фильтры -->
				<!-- блок сортировки -->

				<div id="content" class="">

					<div id="cart" class="cart_order">
						<div class="field-content">


							<div class="field field_2">
								<div class="col_1">
									<div class="title">Контактные данные</div>
									<div class="name">Иван Иванов</div>
									<div class="number">+38(050)500-01-01</div>
									<div class="mail"><a href="mailto:ivanov@mail.ru">ivanov@mail.ru</a></div>
									<div class="address">Харьков, Украина</div>
									<div class="link"><a href="">Изменить данные</a></div>
								</div>
								<div class="col_1">
									<div class="bonus">Всего бонусов - <span class="green"> 1000</span></div>
									<div class="bonus">Потраченых бонусов - <span class="red"> -456</span></div>
									<div class="bonus">Уже сэкономили - <span class="green"> 345 грн</span></div>
									<div class="bonus bonus_field_4">Ваш статус - <span class="stat">Бронзовый</span><a href="#info_status" class="info_popup_black colorbox inline"></a></div>
								</div>
							</div>

							<div class="field field_2_2">
								<div class="title">Контактные данные</div>
								<div class="tit">Я уже зарегистрирован <a href="">Войти в личный кабинет</a></div>
								<form class="order_reg">
									<div class="form_item form_item_2">
										<input type="text" name="name" id="name" onkeyup="checkParams()" placeholder="Ваше имя">
									</div>
									<div class="form_item form_item_2">
										<input type="text" name="last_name" id="last_name" onkeyup="checkParams()" placeholder="Ваша фамилия">
									</div>
									<div class="form_item">
										<input type="text" name="number" id="number" onkeyup="checkParams()" placeholder="Ваш телефон">
									</div>
									<div class="form_item">
										<input type="email" name="email"  id="email" placeholder="Ваш email" onkeyup="checkParams()">
									</div>
									<div class="form_item">
										<input type="text" name="" id="city" placeholder="Ваш город (страна)" onkeyup="checkParams()">
									</div>
									<div class="position-1 position-share posiotion">
										<input type="checkbox" name="order" id="id-label-133">
										<label for="id-label-133">Зарегистрировать меня</label>
									</div>
									<div class="form_action">
										<input type="submit" name="" value="Далее">
									</div>
								</form>
							</div>

							<div class="field field_3">
								<div class="order_city">
									<div class="city">Доставка в <a href="">Харьков</a></div>

									<div class="setting"><a href="">Изменить город</a></div>
								</div>

								<form id="form_order_delivery" class="form_order_delivery">
									<div class="position-1 position-share posiotion">
										<input type="radio" name="order" id="id-label-1" disabled="disabled" onClick="checkParamsCheck()">
										<label for="id-label-1">
											<span class="field-img"><img src="dist/images/order_1.png"></span>
											<span class="field-title">Самовывоз из нашего магазина</span>
											<span class="price">бесплатно</span>
											<span class="time">Сегодня с 9:00 до 17:00</span>

										</label>
									</div>

									<div class="position-1 position-share posiotion np">
										<input type="radio" name="order" id="id-label-2" disabled="disabled" onClick="checkParamsCheck()">
										<label for="id-label-2">
											<span class="field-img"><img src="dist/images/order_2.png"></span>
											<span class="field-title">Самовывоз Новая почта</span>
											<span class="price">50 грн</span>
											<span class="time">от 1 до 3 дней</span>
										</label>
										<div class="form_np">
											<select disabled="disabled">
												<option>Выбрать отделение</option>
												<option>Отделение 1</option>
												<option>Отделение 2</option>
												<option>Отделение 3</option>
												<option>Отделение 4</option>
												<option>Отделение 5</option>
											</select>
											<a href="">Смотреть на карте</a>
										</div>
									</div>

									<div class="position-1 position-share posiotion">
										<input type="radio" name="order" id="id-label-3" disabled="disabled" onClick="checkParamsCheck()">

										<label for="id-label-3">
											<span class="field-img"><img src="dist/images/order_3.png"></span>
											<span class="field-title">Самовывоз Delivery</span>
											<span class="price">50 грн</span>
											<span class="time">от 1 до 3 дней</span>

										</label>
									</div>

									<div class="position-1 position-share posiotion">
										<input type="radio" name="order" id="id-label-4" disabled="disabled" onClick="checkParamsCheck()">
										<label for="id-label-4">
											<span class="field-img"><img src="dist/images/order_4.png"></span>
											<span class="field-title">Самовывоз Meest Express</span>
											<span class="price">50 грн</span>
											<span class="time">от 1 до 3 дней</span>

										</label>
									</div>

									<div class="position-1 position-share posiotion">
										<input type="radio" name="order" id="id-label-5" disabled="disabled" onClick="checkParamsCheck()">
										<label for="id-label-5">
											<span class="field-img"><img src="dist/images/order_5.png"></span>
											<span class="field-title">Самовывоз Укрпочта</span>
											<span class="price">50 грн</span>
											<span class="time">от 1 до 3 дней</span>

										</label>
									</div>

									<div class="position-1 position-share posiotion">
										<input type="radio" name="order" id="id-label-6" disabled="disabled" onClick="checkParamsCheck()">
										<label for="id-label-6">
											<span class="field-img"><img src="dist/images/order_6.png"></span>
											<span class="field-title">Курьер по Вашему адресу</span>
											<span class="price">50 грн</span>
											<span class="time">от 1 до 3 дней</span>

										</label>
									</div>
								</form>
							</div>

							<div class="field field_4">
								<div class="title">Способы оплаты</div>

								<form id="form_order_delivery_1" class="form_order_delivery">
									<div class="position-1 position-share posiotion">
										<input type="radio" name="order" id="id-label-12" disabled="disabled" onClick="checkParamsCheck_1()">
										<label for="id-label-12">
											Наличными при получении
										</label>
									</div>

									<div class="position-1 position-share posiotion">
										<input type="radio" name="order" id="id-label-23" disabled="disabled" onClick="checkParamsCheck_1()">
										<label for="id-label-23">
											Безналичный расчет
										</label>
									</div>

									<div class="position-1 position-share posiotion">
										<input type="radio" name="order" id="id-label-33" disabled="disabled" onClick="checkParamsCheck_1()">

										<label for="id-label-33">
											<span class="field-img"><img src="dist/images/order_7.png"></span>
										</label>
									</div>

									<div class="position-1 position-share posiotion">
										<input type="radio" name="order" id="id-label-44" disabled="disabled" onClick="checkParamsCheck_1()">
										<label for="id-label-44">
											<span class="field-img"><img src="dist/images/order_8.png"></span>
										</label>
									</div>


								</form>
							</div>

							<div class="field field_5">
								<div class="title">Промокод</div>
								<form>
									<div class="form_item">
										<input type="text" name="" placeholder="Введите код" disabled="disabled">
									</div>
									<div class="form_action">
										<input type="submit" name="" value="Применить">
									</div>
								</form>
							</div>

							<div class="field field_6">
								<div class="title">Комментарий к заказу</div>
								<form>
									<div class="form_item">
										<textarea placeholder="Введите комментарий" disabled="disabled"></textarea>
									</div>
								</form>
							</div>

							<div class="field field_1">
								<div class="title">Товары <span>Проверьте ваши товары и завершите оформление заказа</span></div>
								<div class="row row-1">
									<div class="col col-1">
										<div class="field-img">
											<img src="dist/images/c1.png">
										</div>
									</div>
									<div class="col col-2">
										<div class="field-title">Компрессор 50 л, 3 кВт, 220 В, 8 атм, 420 л/мин, 2 цилиндра. INTERTOOL PT-0007</div>
										<div class="art"><div class="label">Артикул:</div>PT-0010</div>

										<div class="col_1_2">


											<div class="price">
												<div class="price-old">2,799 грн.</div>
												<div class="price-new">1 009 грн.</div>
											</div>

											<div class="bonus">
												+119.95 бонусов
											</div>
										</div>
									</div>
								</div>

								<div class="row row-2 disabled">
									<div class="col col-1">
										<div class="field-img">
											<img src="dist/images/c1.png">
										</div>
									</div>
									<div class="col col-2">
										<div class="field-title">Компрессор 50 л, 3 кВт, 220 В, 8 атм, 420 л/мин, 2 цилиндра. INTERTOOL PT-0007</div>
										<div class="art"><div class="label">Артикул:</div>PT-0010</div>
										<div class="col_1_2">


											<div class="price">
												<div class="price-old">2,799 грн.</div>
												<div class="price-new">1 009 грн.</div>
											</div>

											<div class="bonus">
												+119.95 бонусов
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>	<!-- end #content -->
			</div>	<!-- end main-content -->

			<div id="sidebar" class="one-sidebar right-sidebar clearfix order-page">
				<div class="you_order airSticky">
					<div class="col col_1">
						<div class="row">
							<div class="label">Товаров (3)</div>
							<div class="price">7395 грн.</div>
						</div>

						<div class="row">
							<div class="label">Доставка</div>
							<div class="price">50 грн.</div>
						</div>

						<div class="row">
							<div class="label">Ваша экономия</div>
							<div class="price">-1102 грн.</div>
						</div>

						<div class="row">
							<div class="label">Итого бонусов</div>
							<div class="price"><span class="green">+ 600.95</span></div>
						</div>
					</div>

					<div class="col">
						<div class="bonus_info">
							Оплатить бонусами <a href="#info_bonus" class="info_popup_black colorbox inline"></a>
						</div>
						<div class="field_bonus">
							<input type="number" name="" placeholder="Количество бонусов">
							<label> бонусов</label>
						</div>
						<div class="bonus_o">
							<div>Оплата бонусами</div>
							<div><span class="red">-784 бонусов</span></div>
						</div>
						<div class="bon_1">
							-355 грн. за счет бонусов
						</div>
					</div>

					<div class="col">
						<div class="total">
							<div>Итого к оплате</div>
							<div class="total_price">
								7935 грн.
							</div>
						</div>

						<div class="confirm">
							<a href="" class="btn red">Заказ подтверждаю</a>
						</div>

						<div class="position-1 position-share posiotion">
							<input type="checkbox" name="order" id="id-label-1333">
							<label for="id-label-1333">Отправить заказ без подтверждения</label>
						</div>

						<div class="info order_btn">
							<a href="#order_popup" class="colorbox inline">Попап уведомление</a>
						</div>
					</div>
				</div>
			</div> <!-- end sidebar -->
		</div>
	</main>		
</template>

<script>
import "./order.scss";
export default {
    
}
</script>

<style lang="scss">

</style>
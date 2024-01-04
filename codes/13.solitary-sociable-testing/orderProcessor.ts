import { checkStock } from "./InventoryService"
import { sendEmail } from "./EmailService"
// 订单处理系统
export class OrderProcessor {
	processOrder(order: any) {
		// 检查并更新库存，发送确认邮件
		const isOk: any = checkStock(order)
		if (isOk) {
			sendEmail()
		}
	}
}

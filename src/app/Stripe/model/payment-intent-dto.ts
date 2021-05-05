export interface PaymentIntentDto {
    token: string;
    description: string;
    amount: number;
    currency: string;
}
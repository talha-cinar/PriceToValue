const app = Vue.createApp(
{
    data() 
    {
        return {
            price: '',
            calculatedValue: 0,
            TLLevy: 0,
            GetFundLevy: 0,
            CovidLevy: 0,
            NHIL: 0,
            VAT: 0
        };
    },
    methods: 
    {
        validateInput(event) 
        {
            const inputValue = event.target.value;
            const validValue = inputValue.replace(/[^0-9.]/g, '').replace(/(\..*?)+/g, '$1').replace(/^0+(?=\d)/, '');
            this.price = validValue;
            this.calculate();
        },
        calculate() 
        {
            const priceValue = parseFloat(this.price);

            if (!isNaN(priceValue)) 
            {
                this.calculatedValue = (priceValue * 1000) / 1229;                        
                this.VAT = this.calculatedValue * 0.159;        // VAT = value * 106/100 * 15/100
                this.TLLevy = this.calculatedValue / 100;
                this.GetFundLevy = this.calculatedValue / 40;   // 2.5%= 1/40
                this.CovidLevy = this.calculatedValue / 100;
                this.NHIL = this.calculatedValue / 40;          // 2.5%= 1/40
            } 
            else 
            {
                this.resetValues();
            }
        },
        resetValues() 
        {
            this.calculatedValue = 0;
            this.TLLevy = 0;
            this.GetFundLevy = 0;
            this.CovidLevy = 0;
            this.NHIL = 0;
            this.VAT = 0;
        }
    }
});

app.mount('#app');

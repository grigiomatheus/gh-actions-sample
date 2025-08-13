namespace SampleWebApi
{
    public class WeatherForecast
    {
        public DateOnly Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string? Summary { get; set; }

        public string? Summary2 { get; set; }

        public string? Summary3 { get; set; }

        public string? Summary4 { get; set; }

        public string? Summary5 { get; set; }

        public string? Summary6 { get; set; }

        public string? Summary7 { get; set; }

        public string? Summary8 { get; set; }

        public string? Summary9 { get; set; }

        public string? Summary10 { get; set; }

        public string? Summary11 { get; set; }
    }
}

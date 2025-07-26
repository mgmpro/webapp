class DateUtils {
    static getFormattedDate(date: Date) {
        const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        
        const dayName = days[date.getDay()]; //Get the name of the day
        const day = date.getDate(); // Get the day of the month
        const month = months[date.getMonth()]; // Get the name of the month
        const year = date.getFullYear(); // Get the full year

        return `${dayName} ${day} ${month}, ${year}`;
    }

    static formatDateString(dateString: string) {
        if (dateString != undefined) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('es-CL', {
                year: 'numeric',
                month: 'long',
                day: '2-digit'
            }).format(date);
        }
    }
}

export default DateUtils;
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BillografenEF.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Booking
    {
        public int ID { get; set; }
        public int SalonID { get; set; }
        public System.DateTime DateTime { get; set; }
        public int CinemaID { get; set; }
        public int MoviesID { get; set; }
        public int MemberID { get; set; }
    
        public virtual Cinema Cinema { get; set; }
        public virtual Member Member { get; set; }
        public virtual Movies Movies { get; set; }
        public virtual Salon Salon { get; set; }
    }
}
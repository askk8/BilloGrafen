using BillografenEF.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BillografenEF.Controllers
{
    public class MembersTestController : ApiController
    {
        // GET: api/MembersTest
        public IEnumerable<MemberViewModel> Get()
        {
            var membersList = new List<MemberViewModel>();

            var connectionString = "Data Source=LAPTOP-1PA6A8D5\\SQLEXPRESS;Initial Catalog=Member; Intergrated Security=True;";
            var query = "SELECT username FROM [Member]";

            SqlConnection con = new SqlConnection(connectionString);
            SqlCommand com = new SqlCommand(query, con);

            con.Open();
            SqlDataReader red = com.ExecuteReader();

            var ret = new List<MemberViewModel>();

            while (red.Read())
            {
                ret.Add(new MemberViewModel {UserName = red[0].ToString() });
            }

            red.Close();

            return ret;       
        }

        // GET: api/MembersTest/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/MembersTest
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/MembersTest/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/MembersTest/5
        public void Delete(int id)
        {
        }
    }
}

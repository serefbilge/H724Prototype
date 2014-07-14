using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Routing;

namespace H724.UI.Web.Helpers
{
    public static class Extensions
    {
        public static string Md5GenerateHash(this string strInput)
        {
            // Create a new instance of the MD5CryptoServiceProvider object.
            MD5 md5Hasher = MD5.Create();

            // Convert the input string to a byte array and compute the hash.
            byte[] data = md5Hasher.ComputeHash(Encoding.Default.GetBytes(strInput));

            // Create a new Stringbuilder to collect the bytes and create a string.
            var sBuilder = new StringBuilder();

            // Loop through each byte of the hashed data and format each one as a hexadecimal string.
            for (int nIndex = 0; nIndex < data.Length; ++nIndex)
            {
                sBuilder.Append(data[nIndex].ToString("x2"));
            }

            // Return the hexadecimal string.
            return sBuilder.ToString();
        }
        public static RouteValueDictionary Extend(this RouteValueDictionary dest, IEnumerable<KeyValuePair<string, object>> src)
        {
            src.ToList().ForEach(x => { dest[x.Key] = x.Value; });
            return dest;
        }
    }
}
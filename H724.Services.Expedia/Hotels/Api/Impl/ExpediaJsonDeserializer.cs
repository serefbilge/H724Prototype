using System.IO;
using System.Runtime.Serialization.Json;
using System.Text;
using RestSharp;
using RestSharp.Deserializers;

namespace H724.Services.Expedia.Hotels.Api.Impl
{
    public class ExpediaJsonDeserializer : IDeserializer
    {
        public string RootElement { get; set; }
        public string Namespace { get; set; }
        public string DateFormat { get; set; }

        public T Deserialize<T>(IRestResponse response)
        {
            T target;

            using (var ms = new MemoryStream(Encoding.UTF8.GetBytes(response.Content)))
            {
                var serializer = new DataContractJsonSerializer(typeof(T));
                target = (T)serializer.ReadObject(ms);
            }

            return target;
        }
    }
}
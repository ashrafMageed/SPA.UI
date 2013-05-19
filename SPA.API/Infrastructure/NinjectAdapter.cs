using Ninject;
using ServiceStack.Configuration;

namespace SPA.API.Infrastructure
{
    public class NinjectAdapter : IContainerAdapter
    {
        private readonly IKernel _kernel;

        public NinjectAdapter(IKernel kernel)
        {
            _kernel = kernel;
        }

        public T Resolve<T>()
        {
            return _kernel.Get<T>();
        }

        public T TryResolve<T>()
        {
            return _kernel.TryGet<T>();
        }
    }
}
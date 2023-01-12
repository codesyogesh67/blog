

const Layout = ({ children }) => (

    <div className="container flex items-center justify-center py-4 mt-4 mx-auto sm:mt-12 px-6">
        <div className="min-h-screen">

            <main>

                {children}

            </main>
        </div>

    </div>
)

export default Layout